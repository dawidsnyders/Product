# How to Create the Kamino.com User Journey Map in FigJam

## Quick Start (5 minutes)

### Step 1: Create a New FigJam Plugin

1. Open FigJam (create a new FigJam file)
2. Go to **Plugins** → **Development** → **New plugin...**
3. Choose **FigJam** as the platform
4. Name it "Kamino Journey Map"
5. Click **Save as** and save it anywhere on your computer

### Step 2: Add the Plugin Code

1. After creating, Figma will open the plugin files
2. Find and open `code.js`
3. **Delete everything** in `code.js`
4. Copy the ENTIRE contents of `kamino-figjam-plugin.js` (in this folder)
5. Paste it into `code.js`
6. Save the file (Cmd/Ctrl + S)

### Step 3: Run the Plugin

1. Go back to your FigJam file
2. Go to **Plugins** → **Development** → **Kamino Journey Map**
3. Wait a few seconds...
4. Done! The full user journey map will be created.

## What Gets Created

The plugin creates:

- **Title & Subtitle** - "Kamino.com - User Journey Map"
- **Navigation Bar** - All 8 main nav items (Earn, Borrow, Liquidity, etc.)
- **6 Product Sections** - Each with pages, features, and actions
  - Earn (green)
  - Borrow (orange)
  - Liquidity (blue)
  - Multiply (purple)
  - Leverage (yellow)
  - Swap (teal)
- **Portfolio Section** - With all position types
- **Stake & Governance Section** - Staking and airdrop pages
- **Global Modals** - Wallet connect, transaction states
- **4 User Journeys** - Step-by-step flows with arrows
- **Color Legend** - Reference for all section colors

## Customization

After the plugin runs, you can:

1. **Move sections** around to fit your preferred layout
2. **Add connectors** between related items (use the connector tool)
3. **Edit sticky notes** to add more detail
4. **Add images** or screenshots from the actual app
5. **Change colors** if you prefer different ones

## Troubleshooting

**Plugin doesn't run?**
- Make sure you saved `code.js` after pasting the code
- Try reloading FigJam (Cmd/Ctrl + R)

**Fonts look wrong?**
- The plugin uses Inter font (FigJam default)
- If you don't have Inter, it will use a fallback

**Want to re-run?**
- Just delete everything and run the plugin again
- Or run it in a new FigJam file

## Files in this folder

- `kamino-figjam-plugin.js` - The plugin code (copy this into FigJam)
- `kamino-com-figjam-nodes.json` - Raw data structure
- `kamino-com-flowchart.mmd` - Mermaid diagram version
- `kamino-com-user-journey-map.md` - Full documentation
