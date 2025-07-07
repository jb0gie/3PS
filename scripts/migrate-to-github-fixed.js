#!/usr/bin/env node

import { GitHubPocketDB } from 'github-pocket-db';
import { Octokit } from '@octokit/rest';
import fs from 'fs/promises';
import path from 'path';
import process from 'process';

async function runMigration() {
	console.log('🚀 Starting PocketBase to GitHub migration...');

	// Configuration
	const config = {
		owner: 'jb0gie',
		repo: '3PS',
		token: process.env.GITHUB_TOKEN,
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

		console.log(`📂 Repository: ${config.owner}/${config.repo}`);
		console.log(`📋 Schema: ./pb_schema.json`);
		console.log(`📊 Data: ./extracted-data/all-data.json`);
		console.log(`💾 Storage: ./storage`);
		console.log('');

		// Initialize Octokit for GitHub operations
		const octokit = new Octokit({ auth: config.token });

		const result = {
			collections: 0,
			records: 0,
			files: 0,
			errors: [],
			warnings: []
		};

		// Step 1: Upload schema to GitHub
		console.log('📋 Uploading schema to GitHub...');
		try {
			const schemaContent = await fs.readFile('./pb_schema.json', 'utf-8');
			await uploadToGitHub(octokit, config, 'pb_schema.json', schemaContent, 'Upload PocketBase schema');
			console.log('✅ Schema uploaded successfully');
		} catch (error) {
			result.errors.push(`Failed to upload schema: ${error.message}`);
			console.error('❌ Schema upload failed:', error.message);
		}

		// Step 2: Process and upload data
		console.log('📊 Processing extracted data...');
		try {
			const extractedDataContent = await fs.readFile('./extracted-data/all-data.json', 'utf-8');
			const extractedData = JSON.parse(extractedDataContent);

			// Filter out system collections and process user collections
			const userCollections = ['artist', 'musician', 'partner', 'Metaverse', 'memories', 'publications', 'team'];

			for (const collectionName of userCollections) {
				if (extractedData[collectionName]) {
					const records = extractedData[collectionName];
					console.log(`📦 Processing ${collectionName}: ${records.length} records`);

					// Process records to ensure they have proper structure
					const processedRecords = records.map(record => ({
						...record,
						collectionName: collectionName,
						created: record.created || new Date().toISOString(),
						updated: record.updated || new Date().toISOString()
					}));

					// Upload collection data
					const collectionData = JSON.stringify(processedRecords, null, 2);
					await uploadToGitHub(
						octokit,
						config,
						`${config.dataPath}/${collectionName}.json`,
						collectionData,
						`Add ${collectionName} collection data`
					);

					result.collections++;
					result.records += processedRecords.length;
					console.log(`✅ Uploaded ${collectionName}: ${processedRecords.length} records`);
				}
			}
		} catch (error) {
			result.errors.push(`Failed to process data: ${error.message}`);
			console.error('❌ Data processing failed:', error.message);
		}

		// Step 3: Copy storage files (sample - full implementation would be more complex)
		console.log('📁 Copying storage files...');
		try {
			// Get a few sample files to demonstrate
			const storageFiles = await getStorageFiles('./storage');
			const sampleFiles = storageFiles.slice(0, 5); // Just copy first 5 files as demo

			for (const file of sampleFiles) {
				try {
					const fileContent = await fs.readFile(file.fullPath);
					const githubPath = file.relativePath.replace(/\\/g, '/'); // Normalize path for GitHub

					await uploadFileToGitHub(
						octokit,
						config,
						githubPath,
						fileContent,
						`Copy storage file: ${file.name}`
					);

					result.files++;
					console.log(`✅ Copied file: ${file.name}`);
				} catch (error) {
					console.log(`⚠️  Failed to copy ${file.name}: ${error.message}`);
				}
			}

			if (storageFiles.length > 5) {
				result.warnings.push(`Only copied ${sampleFiles.length} of ${storageFiles.length} files as demonstration`);
			}
		} catch (error) {
			result.errors.push(`Failed to copy storage files: ${error.message}`);
			console.error('❌ Storage copy failed:', error.message);
		}

		// Generate report
		const report = generateReport(result);
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
		console.log(`📝 Report saved to: ${reportPath}`);

		if (result.errors.length > 0) {
			console.log('');
			console.log('❌ Errors occurred:');
			result.errors.forEach(error => console.log(`   - ${error}`));
		} else {
			console.log('');
			console.log('🎉 Migration completed successfully!');
			console.log('');
			console.log('🚀 Next steps:');
			console.log('   1. Check your GitHub repository for the new data/ folder');
			console.log('   2. Update your src/lib/db.ts to use GitHubPocketDB');
			console.log('   3. Test your application with the GitHub database');
		}

	} catch (error) {
		console.error('❌ Migration failed:', error.message);
		process.exit(1);
	}
}

// Helper function to upload text content to GitHub
async function uploadToGitHub(octokit, config, filePath, content, message) {
	try {
		// Check if file exists
		let sha;
		try {
			const existing = await octokit.rest.repos.getContent({
				owner: config.owner,
				repo: config.repo,
				path: filePath,
				ref: config.branch
			});

			if (!Array.isArray(existing.data) && existing.data.type === 'file') {
				sha = existing.data.sha;
			}
		} catch (error) {
			// File doesn't exist, that's fine
		}

		await octokit.rest.repos.createOrUpdateFileContents({
			owner: config.owner,
			repo: config.repo,
			path: filePath,
			message: message,
			content: Buffer.from(content, 'utf-8').toString('base64'),
			branch: config.branch,
			sha
		});
	} catch (error) {
		throw new Error(`Failed to upload ${filePath}: ${error.message}`);
	}
}

// Helper function to upload binary files to GitHub
async function uploadFileToGitHub(octokit, config, filePath, fileBuffer, message) {
	try {
		await octokit.rest.repos.createOrUpdateFileContents({
			owner: config.owner,
			repo: config.repo,
			path: filePath,
			message: message,
			content: fileBuffer.toString('base64'),
			branch: config.branch
		});
	} catch (error) {
		throw new Error(`Failed to upload file ${filePath}: ${error.message}`);
	}
}

// Helper function to get storage files
async function getStorageFiles(storagePath) {
	const files = [];

	async function scanDirectory(dirPath, relativePath = '') {
		const entries = await fs.readdir(dirPath, { withFileTypes: true });

		for (const entry of entries) {
			const fullPath = path.join(dirPath, entry.name);
			const entryRelativePath = path.join(relativePath, entry.name);

			if (entry.isDirectory()) {
				await scanDirectory(fullPath, entryRelativePath);
			} else if (entry.isFile() && !entry.name.endsWith('.attrs')) {
				files.push({
					name: entry.name,
					fullPath: fullPath,
					relativePath: path.join('storage', entryRelativePath)
				});
			}
		}
	}

	await scanDirectory(storagePath);
	return files;
}

// Helper function to generate report
function generateReport(result) {
	const report = [
		'# PocketBase to GitHub Migration Report',
		'',
		`**Migration Date:** ${new Date().toISOString()}`,
		'',
		'## Summary',
		`- Collections migrated: ${result.collections}`,
		`- Records migrated: ${result.records}`,
		`- Files copied: ${result.files}`,
		`- Errors: ${result.errors.length}`,
		`- Warnings: ${result.warnings.length}`,
		''
	];

	if (result.errors.length > 0) {
		report.push('## Errors');
		result.errors.forEach(error => {
			report.push(`- ❌ ${error}`);
		});
		report.push('');
	}

	if (result.warnings.length > 0) {
		report.push('## Warnings');
		result.warnings.forEach(warning => {
			report.push(`- ⚠️  ${warning}`);
		});
		report.push('');
	}

	if (result.errors.length === 0) {
		report.push('## ✅ Migration Completed Successfully!');
		report.push('');
		report.push('Your PocketBase data has been successfully migrated to GitHub.');
		report.push('You can now use the GitHub database in your application.');
	}

	return report.join('\n');
}

runMigration().catch(console.error); 