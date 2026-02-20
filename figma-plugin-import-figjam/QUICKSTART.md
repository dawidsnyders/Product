# Quick Start Guide

## ✅ Everything is Ready!

The plugin has been built and validated. Here's what's been set up:

- ✅ Plugin code compiled (`code.js` - 15.5 KB)
- ✅ JSON data file validated (11 sections, 39 connections)
- ✅ Figma file access verified
- ✅ All dependencies installed

## 🚀 Import Your Data (3 Steps)

### Step 1: Load the Plugin in Figma

1. Open **Figma Desktop** app (not browser)
2. Open your FigJam file:
   ```
   https://www.figma.com/board/3Ga78MgnaLxXgn2rqu9A5D/Kamino-Product-Flow-Map
   ```
3. Go to: **Plugins** → **Development** → **Import plugin from manifest...**
4. Navigate to and select:
   ```
   /Users/dawid/Github/Product/figma-plugin-import-figjam/manifest.json
   ```

### Step 2: Run the Plugin

1. Go to: **Plugins** → **Development** → **Import FigJam from JSON**
2. The plugin UI will open

### Step 3: Import Your Data

1. Click **"Choose File"**
2. Select: `webapp-mapping/kamino-com-figjam-nodes.json`
3. Click **"Import to FigJam"**
4. Wait for the import to complete (may take a moment for large files)

## 🎨 What Gets Created

- **Section headers** with color coding
- **Page nodes** (rounded rectangles)
- **Action nodes** (pill-shaped)
- **Modal nodes** (diamonds)
- **Connection lines** between related nodes
- **User journey flows** (if included in JSON)

All colors are applied from your JSON legend automatically!

## 🔧 Troubleshooting

**Plugin not appearing?**
- Make sure you're using Figma Desktop (not browser)
- Verify you selected the correct `manifest.json` file
- Check that `code.js` exists in the plugin directory

**Import fails?**
- Verify your JSON file is valid
- Make sure you're in a FigJam file (not a regular Figma design file)
- Check the plugin console for error messages

**Need to rebuild?**
```bash
cd figma-plugin-import-figjam
npm run build
```

## 📝 Files

- `manifest.json` - Plugin configuration
- `code.js` - Compiled plugin code (auto-generated)
- `code.ts` - Source code
- `ui.html` - Plugin UI
- `populate-figjam.js` - Validation script

## 🎯 Next Steps After Import

After importing, you can:
- Rearrange nodes as needed
- Adjust colors and styling
- Add additional annotations
- Export or share your diagram

---

**Ready to go!** Just follow the 3 steps above to import your user journey map into FigJam.
