#!/usr/bin/env node

import sqlite3 from 'sqlite3';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the PocketBase database
const DB_PATH = path.join(__dirname, '..', 'data.db');
const OUTPUT_DIR = path.join(__dirname, '..', 'extracted-data');

async function extractPocketBaseData() {
	console.log('🔍 Extracting data from PocketBase database...');

	try {
		// Create output directory
		await fs.mkdir(OUTPUT_DIR, { recursive: true });

		// Open SQLite database
		const db = new sqlite3.Database(DB_PATH, sqlite3.OPEN_READONLY);

		// Get all collections (tables)
		const collections = await queryDatabase(db, `
            SELECT name FROM sqlite_master 
            WHERE type='table' 
            AND name NOT LIKE '_pb_%' 
            AND name NOT LIKE 'sqlite_%'
            AND name != '_admins'
            AND name != '_users'
        `);

		console.log(`📋 Found ${collections.length} collections:`, collections.map(c => c.name));

		const extractedData = {};

		// Extract data from each collection
		for (const collection of collections) {
			const tableName = collection.name;
			console.log(`📦 Extracting ${tableName}...`);

			try {
				const records = await queryDatabase(db, `SELECT * FROM "${tableName}"`);
				extractedData[tableName] = records;

				// Save individual collection file
				await fs.writeFile(
					path.join(OUTPUT_DIR, `${tableName}.json`),
					JSON.stringify(records, null, 2)
				);

				console.log(`✅ Extracted ${records.length} records from ${tableName}`);
			} catch (error) {
				console.log(`⚠️  Could not extract ${tableName}:`, error.message);
			}
		}

		// Save combined data file
		await fs.writeFile(
			path.join(OUTPUT_DIR, 'all-data.json'),
			JSON.stringify(extractedData, null, 2)
		);

		// Generate summary
		const summary = {
			extractedAt: new Date().toISOString(),
			collections: Object.keys(extractedData),
			totalRecords: Object.values(extractedData).reduce((sum, records) => sum + records.length, 0),
			collectionCounts: Object.fromEntries(
				Object.entries(extractedData).map(([name, records]) => [name, records.length])
			)
		};

		await fs.writeFile(
			path.join(OUTPUT_DIR, 'extraction-summary.json'),
			JSON.stringify(summary, null, 2)
		);

		console.log('');
		console.log('🎉 Data extraction completed!');
		console.log(`📁 Files saved to: ${OUTPUT_DIR}`);
		console.log('📊 Summary:');
		console.log(`   Collections: ${summary.collections.length}`);
		console.log(`   Total Records: ${summary.totalRecords}`);
		console.log('');
		console.log('📋 Collection breakdown:');
		Object.entries(summary.collectionCounts).forEach(([name, count]) => {
			console.log(`   ${name}: ${count} records`);
		});

		// Close database
		db.close();

	} catch (error) {
		console.error('❌ Error extracting data:', error);
		process.exit(1);
	}
}

// Helper function to promisify database queries
function queryDatabase(db, query) {
	return new Promise((resolve, reject) => {
		db.all(query, (err, rows) => {
			if (err) {
				reject(err);
			} else {
				resolve(rows);
			}
		});
	});
}

// Run the extraction
extractPocketBaseData().catch(console.error); 