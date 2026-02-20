#!/usr/bin/env node

/**
 * Script to populate FigJam file with JSON data using Figma REST API
 * Note: Figma REST API cannot create nodes directly, so this script
 * validates the setup and provides instructions for using the plugin.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const FIGMA_API_BASE = 'https://api.figma.com/v1';
const ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN || '';
const FILE_KEY = '3Ga78MgnaLxXgn2rqu9A5D'; // Extracted from the URL

// Extract file key from URL
function extractFileKey(url) {
  const match = url.match(/board\/([a-zA-Z0-9]+)/);
  return match ? match[1] : null;
}

// Make Figma API request
function figmaRequest(endpoint) {
  return new Promise((resolve, reject) => {
    const url = `${FIGMA_API_BASE}${endpoint}`;
    const options = {
      headers: {
        'X-Figma-Token': ACCESS_TOKEN,
      },
    };

    https.get(url, options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(new Error('Failed to parse response: ' + e.message));
          }
        } else {
          reject(new Error(`API request failed: ${res.statusCode} - ${data}`));
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Read JSON data
function readJsonData(jsonPath) {
  try {
    const data = fs.readFileSync(jsonPath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    throw new Error(`Failed to read JSON file: ${err.message}`);
  }
}

// Main function
async function main() {
  console.log('🚀 FigJam Import Setup Validator\n');

  // Check if JSON file exists
  const jsonPath = path.join(__dirname, '..', 'webapp-mapping', 'kamino-com-figjam-nodes.json');
  if (!fs.existsSync(jsonPath)) {
    console.error(`❌ JSON file not found at: ${jsonPath}`);
    process.exit(1);
  }

  console.log('✓ JSON file found');

  // Read and validate JSON
  let jsonData;
  try {
    jsonData = readJsonData(jsonPath);
    console.log(`✓ JSON file is valid`);
    console.log(`  Title: ${jsonData.title || 'N/A'}`);
    console.log(`  Version: ${jsonData.version || 'N/A'}`);
    console.log(`  Sections: ${jsonData.sections?.length || 0}`);
    console.log(`  Connections: ${jsonData.connections?.length || 0}`);
  } catch (err) {
    console.error(`❌ Invalid JSON: ${err.message}`);
    process.exit(1);
  }

  // Verify Figma file access
  console.log('\n🔍 Verifying Figma file access...');
  try {
    const fileData = await figmaRequest(`/files/${FILE_KEY}`);
    console.log(`✓ Figma file accessible`);
    console.log(`  Name: ${fileData.name}`);
    console.log(`  Type: ${fileData.document?.type || 'Unknown'}`);
    
    // Check if it's a FigJam file
    if (fileData.name.toLowerCase().includes('figjam') || 
        fileData.document?.type === 'BOARD') {
      console.log(`✓ Confirmed: This is a FigJam file`);
    } else {
      console.log(`⚠️  Warning: This may not be a FigJam file`);
    }
  } catch (err) {
    console.error(`❌ Failed to access Figma file: ${err.message}`);
    console.error(`   Make sure your access token is valid and has access to this file.`);
    process.exit(1);
  }

  // Check plugin build
  console.log('\n🔧 Checking plugin build...');
  const codeJsPath = path.join(__dirname, 'code.js');
  if (fs.existsSync(codeJsPath)) {
    const stats = fs.statSync(codeJsPath);
    console.log(`✓ Plugin built successfully (${(stats.size / 1024).toFixed(1)} KB)`);
  } else {
    console.error(`❌ Plugin not built. Run: npm run build`);
    process.exit(1);
  }

  // Summary
  console.log('\n✅ Setup Complete!\n');
  console.log('📋 Next Steps:');
  console.log('1. Open Figma Desktop app');
  console.log('2. Open your FigJam file:');
  console.log(`   https://www.figma.com/board/3Ga78MgnaLxXgn2rqu9A5D/Kamino-Product-Flow-Map`);
  console.log('3. Go to: Plugins → Development → Import plugin from manifest...');
  console.log(`4. Select: ${path.join(__dirname, 'manifest.json')}`);
  console.log('5. Run the plugin from: Plugins → Development → Import FigJam from JSON');
  console.log(`6. Select your JSON file: ${jsonPath}`);
  console.log('7. Click "Import to FigJam"\n');

  console.log('💡 Tip: The plugin will create all nodes, connections, and apply color coding automatically!');
}

// Run
main().catch((err) => {
  console.error('\n❌ Error:', err.message);
  process.exit(1);
});
