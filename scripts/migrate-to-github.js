#!/usr/bin/env node

import { PocketBaseMigrator } from 'github-pocket-db';
import process from 'process';

async function runMigration() {
	console.log('🚀 Starting PocketBase to GitHub migration...');

	// Configuration - update these with your actual values
	const config = {
		owner: 'jb0gie', // Your GitHub username (from the npm page)
		repo: '3PS',     // Your repository name
		token: process.env.GITHUB_TOKEN, // Your GitHub token
		branch: 'main',
		dataPath: 'data',
		storagePath: 'storage'
	};

	if (!config.token) {
		console.error('❌ Please set GITHUB_TOKEN environment variable');
		console.log('💡 Create a token at: https://github.com/settings/tokens');
		console.log('💡 Then run: export GITHUB_TOKEN=your_token_here');
		process.exit(1);
	}

	try {
		// Verify files exist before migration
		const fs = await import('fs/promises');

		try {
			await fs.access('./pb_schema.json');
			await fs.access('./extracted-data/all-data.json');
			await fs.access('./storage');
		} catch (error) {
			console.error('❌ Required files missing:');
			console.log('   Make sure these exist:');
			console.log('   - pb_schema.json');
			console.log('   - extracted-data/all-data.json (run: npm run extract-data)');
			console.log('   - storage/ directory');
			process.exit(1);
		}

		// Create migrator instance
		const migrator = new PocketBaseMigrator(config);

		console.log(`📂 Repository: ${config.owner}/${config.repo}`);
		console.log(`📋 Schema: ./pb_schema.json`);
		console.log(`📊 Data: ./extracted-data/all-data.json`);
		console.log(`💾 Storage: ./storage`);
		console.log('');

		// Run migration with your extracted data
		const result = await migrator.migrate(
			'./pb_schema.json',           // Schema file
			'./extracted-data/all-data.json', // Extracted data
			'./storage'                   // Storage directory
		);

		// Generate and save report
		const report = migrator.generateReport(result);
		const reportPath = `migration-report-${new Date().toISOString().split('T')[0]}.md`;

		await fs.writeFile(reportPath, report);

		console.log('');
		console.log('📊 Migration Summary:');
		console.log(`   Collections: ${result.collections}`);
		console.log(`   Records: ${result.records}`);
		console.log(`   Files: ${result.files}`);
		console.log(`   Errors: ${result.errors.length}`);
		console.log(`   Warnings: ${result.warnings.length}`);
		console.log('');
		console.log(`📝 Full report saved to: ${reportPath}`);

		if (result.errors.length > 0) {
			console.log('');
			console.log('❌ Errors occurred during migration:');
			result.errors.forEach(error => console.log(`   - ${error}`));
			process.exit(1);
		} else {
			console.log('');
			console.log('🎉 Migration completed successfully!');
			console.log('');
			console.log('🚀 Next steps:');
			console.log('   1. Update your src/lib/db.ts to use GitHubPocketDB');
			console.log('   2. Test your application with the new GitHub database');
			console.log('   3. Deploy without PocketBase dependency!');
		}

	} catch (error) {
		console.error('❌ Migration failed:', error.message);
		process.exit(1);
	}
}

runMigration().catch(console.error); 