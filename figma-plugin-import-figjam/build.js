const fs = require('fs');
const path = require('path');

// Read the HTML file
const htmlContent = fs.readFileSync(path.join(__dirname, 'ui.html'), 'utf8');

// Read the TypeScript file
let tsContent = fs.readFileSync(path.join(__dirname, 'code.ts'), 'utf8');

// __html__ is provided automatically by Figma from ui.html in manifest.json
// We don't need to inline it - just skip this step
if (tsContent.includes('__html__ is automatically provided') || tsContent.includes('ui.html in manifest')) {
  console.log('✓ Using ui.html from manifest, skipping inline step');
} else {
  // Escape HTML for template literal
  const escapedHtml = htmlContent
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\${/g, '\\${');

  // Find where the actual TypeScript code starts
  const codeStartMarker = '// Figma Plugin API types';
  const codeStartIndex = tsContent.indexOf(codeStartMarker);
  
  if (codeStartIndex > 0) {
    // Keep everything before the marker, add __html__, then add the rest
    const beforeCode = tsContent.substring(0, codeStartIndex);
    const afterCode = tsContent.substring(codeStartIndex);
    tsContent = beforeCode + `// @ts-ignore - __html__ is provided by Figma plugin runtime\nconst __html__: string = \`${escapedHtml}\`;\n\n` + afterCode;
  } else {
    // Prepend at the beginning
    tsContent = `// @ts-ignore - __html__ is provided by Figma plugin runtime\nconst __html__: string = \`${escapedHtml}\`;\n\n` + tsContent;
  }
  
  // Write the modified file
  fs.writeFileSync(path.join(__dirname, 'code.ts'), tsContent);
  console.log('✓ HTML inlined into code.ts');
}
