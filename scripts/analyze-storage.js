#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the schema file
const schemaPath = path.join(__dirname, '..', 'pb_schema.json');
const storagePath = path.join(__dirname, '..', 'storage');

async function readSchema() {
	try {
		const schemaContent = await fs.readFile(schemaPath, 'utf-8');
		return JSON.parse(schemaContent);
	} catch (error) {
		console.error('Error reading schema:', error);
		process.exit(1);
	}
}

async function scanDirectory(dirPath) {
	try {
		const entries = await fs.readdir(dirPath, { withFileTypes: true });
		const result = {};

		for (const entry of entries) {
			const fullPath = path.join(dirPath, entry.name);

			if (entry.isDirectory()) {
				result[entry.name] = await scanDirectory(fullPath);
			} else {
				// Get file stats
				const stats = await fs.stat(fullPath);
				result[entry.name] = {
					type: 'file',
					size: stats.size,
					modified: stats.mtime,
					path: fullPath
				};

				// If it's an .attrs file, try to read its content
				if (entry.name.endsWith('.attrs')) {
					try {
						const content = await fs.readFile(fullPath, 'utf-8');
						result[entry.name].content = JSON.parse(content);
					} catch (err) {
						result[entry.name].parseError = err.message;
					}
				}
			}
		}

		return result;
	} catch (error) {
		console.error(`Error scanning directory ${dirPath}:`, error);
		return {};
	}
}

function analyzeStorageStructure(schema, storageStructure) {
	const collections = schema.filter(c => !c.system);
	const analysis = {
		collections: {},
		files: [],
		summary: {
			totalCollections: 0,
			totalRecords: 0,
			totalFiles: 0,
			totalSize: 0
		}
	};

	// Create collection mapping
	const collectionMap = {};
	collections.forEach(collection => {
		collectionMap[collection.id] = {
			name: collection.name,
			fileFields: collection.fields.filter(field => field.type === 'file')
		};
	});

	// Analyze each collection directory
	Object.keys(storageStructure).forEach(collectionId => {
		if (collectionMap[collectionId]) {
			const collection = collectionMap[collectionId];
			const collectionData = storageStructure[collectionId];

			analysis.collections[collectionId] = {
				name: collection.name,
				fileFields: collection.fileFields,
				records: {},
				stats: {
					recordCount: 0,
					fileCount: 0,
					totalSize: 0
				}
			};

			// Analyze each record directory
			Object.keys(collectionData).forEach(recordId => {
				const recordData = collectionData[recordId];
				if (typeof recordData === 'object' && recordData !== null) {
					analysis.collections[collectionId].records[recordId] = {
						files: [],
						thumbnails: {}
					};

					analysis.collections[collectionId].stats.recordCount++;

					// Process files in this record
					Object.keys(recordData).forEach(fileName => {
						const fileData = recordData[fileName];

						if (fileData.type === 'file') {
							if (fileName.startsWith('thumbs_')) {
								// This is a thumbnail directory
								const originalFileName = fileName.replace('thumbs_', '');
								analysis.collections[collectionId].records[recordId].thumbnails[originalFileName] = fileData;
							} else if (fileName.endsWith('.attrs')) {
								// This is a metadata file
								const originalFileName = fileName.replace('.attrs', '');
								const fileInfo = {
									filename: originalFileName,
									size: fileData.size,
									modified: fileData.modified,
									path: fileData.path,
									metadata: fileData.content || null
								};

								// Find corresponding actual file
								const actualFile = recordData[originalFileName];
								if (actualFile && actualFile.type === 'file') {
									fileInfo.actualSize = actualFile.size;
									fileInfo.actualPath = actualFile.path;
								}

								analysis.collections[collectionId].records[recordId].files.push(fileInfo);
								analysis.collections[collectionId].stats.fileCount++;
								analysis.collections[collectionId].stats.totalSize += fileData.size;
								analysis.summary.totalFiles++;
								analysis.summary.totalSize += fileData.size;

								// Add to global files list
								analysis.files.push({
									collectionId,
									collectionName: collection.name,
									recordId,
									...fileInfo,
									githubPath: `storage/${collectionId}/${recordId}/${originalFileName}`
								});
							}
						}
					});
				}
			});

			analysis.summary.totalCollections++;
			analysis.summary.totalRecords += analysis.collections[collectionId].stats.recordCount;
		}
	});

	return analysis;
}

function formatBytes(bytes) {
	if (bytes === 0) return '0 Bytes';
	const k = 1024;
	const sizes = ['Bytes', 'KB', 'MB', 'GB'];
	const i = Math.floor(Math.log(bytes) / Math.log(k));
	return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function generateReport(analysis) {
	console.log('\n🗂️  POCKETBASE STORAGE ANALYSIS REPORT');
	console.log('=====================================\n');

	console.log('📊 SUMMARY');
	console.log('-----------');
	console.log(`Collections: ${analysis.summary.totalCollections}`);
	console.log(`Records: ${analysis.summary.totalRecords}`);
	console.log(`Files: ${analysis.summary.totalFiles}`);
	console.log(`Total Size: ${formatBytes(analysis.summary.totalSize)}\n`);

	console.log('📁 COLLECTIONS');
	console.log('---------------');
	Object.keys(analysis.collections).forEach(collectionId => {
		const collection = analysis.collections[collectionId];
		console.log(`\n${collection.name} (${collectionId})`);
		console.log(`  Records: ${collection.stats.recordCount}`);
		console.log(`  Files: ${collection.stats.fileCount}`);
		console.log(`  Size: ${formatBytes(collection.stats.totalSize)}`);
		console.log(`  File Fields: ${collection.fileFields.map(f => f.name).join(', ')}`);
	});

	console.log('\n🏷️  FILE EXAMPLES');
	console.log('------------------');
	analysis.files.slice(0, 10).forEach(file => {
		console.log(`${file.collectionName}/${file.recordId}/${file.filename}`);
		if (file.metadata && file.metadata['user.metadata']) {
			console.log(`  Original: ${file.metadata['user.metadata']['original-filename']}`);
		}
		console.log(`  Size: ${formatBytes(file.actualSize || file.size)}`);
		console.log(`  GitHub: ${file.githubPath}\n`);
	});

	if (analysis.files.length > 10) {
		console.log(`... and ${analysis.files.length - 10} more files\n`);
	}
}

async function generateMappingFile(analysis) {
	const mappingPath = path.join(__dirname, '..', 'storage-mapping.json');

	const mapping = {
		generated: new Date().toISOString(),
		summary: analysis.summary,
		collections: {},
		files: analysis.files.map(file => ({
			collection: file.collectionName,
			collectionId: file.collectionId,
			recordId: file.recordId,
			filename: file.filename,
			originalFilename: file.metadata?.['user.metadata']?.['original-filename'] || file.filename,
			contentType: file.metadata?.['user.content_type'] || 'unknown',
			size: file.actualSize || file.size,
			githubPath: file.githubPath,
			githubURL: `https://raw.githubusercontent.com/YOUR_USERNAME/3PS/main/${file.githubPath}`
		}))
	};

	// Add collection summaries
	Object.keys(analysis.collections).forEach(collectionId => {
		const collection = analysis.collections[collectionId];
		mapping.collections[collection.name] = {
			id: collectionId,
			fileFields: collection.fileFields.map(f => f.name),
			recordCount: collection.stats.recordCount,
			fileCount: collection.stats.fileCount,
			totalSize: collection.stats.totalSize
		};
	});

	await fs.writeFile(mappingPath, JSON.stringify(mapping, null, 2));
	console.log(`📝 Mapping file saved to: ${mappingPath}`);
}

async function main() {
	console.log('🔍 Analyzing PocketBase storage structure...\n');

	// Read schema
	const schema = await readSchema();
	console.log(`✅ Schema loaded (${schema.length} collections)`);

	// Scan storage directory
	console.log('🔍 Scanning storage directory...');
	const storageStructure = await scanDirectory(storagePath);
	console.log('✅ Storage structure scanned');

	// Analyze the structure
	console.log('🧮 Analyzing relationships...');
	const analysis = analyzeStorageStructure(schema, storageStructure);
	console.log('✅ Analysis complete');

	// Generate report
	generateReport(analysis);

	// Generate mapping file
	await generateMappingFile(analysis);

	console.log('\n🎉 Analysis complete! You can now:');
	console.log('1. Review the mapping file to understand your storage structure');
	console.log('2. Update the GitHub configuration in db-github.ts');
	console.log('3. Switch to GitHub storage mode in your application');
}

main().catch(console.error); 