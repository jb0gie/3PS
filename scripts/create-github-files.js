#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';

async function createGitHubFiles() {
	console.log('🚀 Creating GitHub database files locally...');

	try {
		// Create data directory
		await fs.mkdir('./data', { recursive: true });
		console.log('📁 Created data/ directory');

		// Read extracted data
		const extractedDataContent = await fs.readFile('./extracted-data/all-data.json', 'utf-8');
		const extractedData = JSON.parse(extractedDataContent);

		// Filter user collections (exclude system tables)
		const userCollections = ['artist', 'musician', 'partner', 'Metaverse', 'memories', 'publications', 'team'];

		let totalRecords = 0;
		let totalCollections = 0;

		for (const collectionName of userCollections) {
			if (extractedData[collectionName]) {
				const records = extractedData[collectionName];
				console.log(`📦 Processing ${collectionName}: ${records.length} records`);

				// Process records to ensure proper structure
				const processedRecords = records.map(record => ({
					...record,
					collectionName: collectionName,
					created: record.created || new Date().toISOString(),
					updated: record.updated || new Date().toISOString()
				}));

				// Write collection file
				const filePath = `./data/${collectionName}.json`;
				await fs.writeFile(filePath, JSON.stringify(processedRecords, null, 2));
				console.log(`✅ Created ${filePath}`);

				totalCollections++;
				totalRecords += processedRecords.length;
			}
		}

		// Copy schema to root (if not already there)
		try {
			await fs.access('./pb_schema.json');
			console.log('✅ Schema file already exists');
		} catch {
			console.log('⚠️  pb_schema.json not found');
		}

		// Create a simple README for the data folder
		const dataReadme = `# GitHub Database Data

This folder contains your PocketBase data converted to JSON format for GitHub-based storage.

## Collections

${userCollections.map(name =>
			extractedData[name] ? `- **${name}.json**: ${extractedData[name].length} records` : ''
		).filter(Boolean).join('\n')}

## Usage

These files are read by the GitHubPocketDB library to provide PocketBase-compatible functionality using GitHub as the backend.

### Example:
\`\`\`typescript
import { GitHubPocketDB } from 'github-pocket-db';

const db = new GitHubPocketDB({
  owner: 'jb0gie',
  repo: '3PS'
});

await db.init();
const artists = await db.collection('artist').getList();
\`\`\`

Generated on: ${new Date().toISOString()}
`;

		await fs.writeFile('./data/README.md', dataReadme);
		console.log('✅ Created data/README.md');

		console.log('');
		console.log('🎉 GitHub database files created successfully!');
		console.log('');
		console.log('📊 Summary:');
		console.log(`   Collections: ${totalCollections}`);
		console.log(`   Records: ${totalRecords}`);
		console.log(`   Files created: ${totalCollections + 1} (+ README)`);
		console.log('');
		console.log('🚀 Next steps:');
		console.log('   1. git add data/ pb_schema.json');
		console.log('   2. git commit -m "Add GitHub database files"');
		console.log('   3. git push origin main');
		console.log('   4. Update your app to use GitHubPocketDB');
		console.log('');
		console.log('✅ Your storage/ files are already in the repo and will work as-is!');

	} catch (error) {
		console.error('❌ Error creating files:', error);
		process.exit(1);
	}
}

createGitHubFiles().catch(console.error); 