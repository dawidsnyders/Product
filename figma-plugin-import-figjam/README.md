# FigJam JSON Importer Plugin

A Figma plugin that imports user journey maps from JSON files directly into FigJam diagrams.

## Features

- Import JSON user journey maps into FigJam
- Automatic node creation (sections, pages, actions, modals)
- Color coding based on your legend
- Connection lines between related nodes
- Support for user journeys visualization

## Installation

1. **Install dependencies:**
   ```bash
   cd figma-plugin-import-figjam
   npm install
   ```

2. **Build the plugin:**
   ```bash
   npm run build
   ```
   This inlines the HTML UI into the TypeScript code and compiles `code.ts` to `code.js`.

3. **Load the plugin in Figma:**
   - Open Figma Desktop app
   - Go to `Plugins` → `Development` → `Import plugin from manifest...`
   - Select the `manifest.json` file in this directory
   - The plugin will appear in your plugins menu

## Usage

1. **Open or create a FigJam file** in Figma
2. **Run the plugin:**
   - Go to `Plugins` → `Development` → `Import FigJam from JSON`
3. **Import your JSON file:**
   - Click "Choose File" and select your JSON file (e.g., `kamino-com-figjam-nodes.json`)
   - Click "Import to FigJam"
   - The plugin will create nodes, connections, and apply color coding

## JSON Format

The plugin expects a JSON file with this structure:

```json
{
  "title": "Your Journey Map Title",
  "version": "2.0",
  "legend": {
    "colors": {
      "section-name": "#hexcolor"
    }
  },
  "sections": [
    {
      "id": "section-id",
      "name": "Section Name",
      "color": "#hexcolor",
      "pages": [...],
      "items": [...],
      "actions": [...]
    }
  ],
  "connections": [
    {
      "from": "node-id",
      "to": "node-id",
      "type": "navigation|action|trigger"
    }
  ],
  "userJourneys": [...]
}
```

## Development

- **Watch mode:** `npm run watch` - Automatically rebuilds on file changes
- **Build once:** `npm run build` - Compiles TypeScript to JavaScript

## Notes

- The plugin works best in FigJam files (not regular Figma design files)
- Large JSON files may take a moment to process
- Nodes are positioned automatically, but you can rearrange them after import
- Colors are applied from your JSON legend

## Troubleshooting

- **Plugin not appearing:** Make sure you've built the plugin (`npm run build`) and selected the correct `manifest.json`
- **Import fails:** Check that your JSON is valid and matches the expected format
- **Nodes overlap:** The plugin uses automatic positioning; you may need to manually adjust spacing for complex maps
