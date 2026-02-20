// Figma Plugin API types
interface ImportMessage {
  type: 'import-json';
  data: any;
}

interface NodePosition {
  x: number;
  y: number;
}

interface NodeData {
  id: string;
  label: string;
  type: 'section' | 'page' | 'action' | 'modal' | 'item';
  color?: string;
  description?: string;
  route?: string;
  position?: NodePosition;
}

// Global state
const nodeMap = new Map<string, SceneNode>();
const nodePositions = new Map<string, NodePosition>();
let currentY = 0;
let currentX = 0;
const nodeWidth = 200;
const nodeHeight = 80;
const horizontalSpacing = 250;
const verticalSpacing = 120;
const sectionSpacing = 200;

// Helper function to convert hex to RGB
function hexToRgb(hex: string): RGB {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255,
      }
    : { r: 0, g: 0, b: 0 };
}

// Create a text node
async function createTextNode(text: string, x: number, y: number, fontSize: number = 12): Promise<TextNode> {
  await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
  
  const textNode = figma.createText();
  textNode.characters = text;
  textNode.fontSize = fontSize;
  textNode.x = x;
  textNode.y = y;
  textNode.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
  
  return textNode;
}

// Create a rectangle node (for pages/sections)
async function createRectangleNode(
  label: string,
  x: number,
  y: number,
  width: number,
  height: number,
  color: RGB,
  cornerRadius: number = 0
): Promise<RectangleNode> {
  const rect = figma.createRectangle();
  rect.x = x;
  rect.y = y;
  rect.resize(width, height);
  rect.cornerRadius = cornerRadius;
  rect.fills = [{ type: 'SOLID', color }];
  rect.strokes = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
  rect.strokeWeight = 1;

  // Add text label
  const textNode = await createTextNode(label, x + 10, y + height / 2 - 6, 12);
  textNode.x = x + 10;
  textNode.y = y + height / 2 - 6;
  
  const group = figma.group([rect, textNode], figma.currentPage);
  group.name = label;
  
  return rect;
}

// Create a pill/rounded rectangle (for actions)
async function createPillNode(
  label: string,
  x: number,
  y: number,
  width: number,
  height: number,
  color: RGB
): Promise<RectangleNode> {
  return await createRectangleNode(label, x, y, width, height, color, height / 2);
}

// Create a diamond shape (for modals/decision points)
async function createDiamondNode(
  label: string,
  x: number,
  y: number,
  size: number,
  color: RGB
): Promise<PolygonNode> {
  const diamond = figma.createPolygon();
  diamond.x = x;
  diamond.y = y;
  diamond.resize(size, size);
  diamond.pointCount = 4;
  diamond.rotation = 45;
  diamond.fills = [{ type: 'SOLID', color }];
  diamond.strokes = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
  diamond.strokeWeight = 1;

  // Add text label
  const textNode = await createTextNode(label, x + size / 2 - 30, y + size / 2 - 6, 11);
  textNode.x = x + size / 2 - 30;
  textNode.y = y + size / 2 - 6;
  
  const group = figma.group([diamond, textNode], figma.currentPage);
  group.name = label;
  
  return diamond;
}

// Create a connector line between two nodes
function createConnector(
  fromId: string,
  toId: string,
  type: string = 'navigation'
): ConnectorNode | null {
  const fromNode = nodeMap.get(fromId);
  const toNode = nodeMap.get(toId);

  if (!fromNode || !toNode) {
    return null;
  }

  const connector = figma.createConnector();
  connector.connectorStart = {
    endpointNodeId: fromNode.id,
    magnet: 'AUTO',
  };
  connector.connectorEnd = {
    endpointNodeId: toNode.id,
    magnet: 'AUTO',
  };

  // Style based on connection type
  if (type === 'navigation') {
    connector.strokeWeight = 2;
    connector.strokes = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
  } else if (type === 'action' || type === 'trigger') {
    connector.strokeWeight = 1.5;
    connector.strokes = [{ type: 'SOLID', color: { r: 0.4, g: 0.4, b: 0.4 } }];
    connector.dashPattern = [5, 5];
  } else {
    connector.strokeWeight = 1;
    connector.strokes = [{ type: 'SOLID', color: { r: 0.6, g: 0.6, b: 0.6 } }];
    connector.dashPattern = [2, 2];
  }

  return connector;
}

// Create section header
async function createSection(section: any, startY: number): Promise<number> {
  const sectionColor = hexToRgb(section.color || '#666666');
  const sectionHeader = await createRectangleNode(
    section.name,
    0,
    startY,
    nodeWidth * 2,
    60,
    sectionColor,
    4
  );
  nodeMap.set(section.id, sectionHeader);
  nodePositions.set(section.id, { x: 0, y: startY });

  let y = startY + 100;

  // Create pages
  if (section.pages) {
    for (const page of section.pages) {
      const pageColor = hexToRgb(section.color || '#666666');
      const pageNode = await createRectangleNode(
        page.label,
        0,
        y,
        nodeWidth,
        nodeHeight,
        pageColor,
        8
      );
      nodeMap.set(page.id, pageNode);
      nodePositions.set(page.id, { x: 0, y: y });
      y += verticalSpacing;
    }
  }

  // Create items (for navigation, modals, etc.)
  if (section.items) {
    for (const item of section.items) {
      const itemColor = hexToRgb(section.color || '#666666');
      const itemNode = await createRectangleNode(
        item.label,
        0,
        y,
        nodeWidth,
        nodeHeight,
        itemColor,
        8
      );
      nodeMap.set(item.id, itemNode);
      nodePositions.set(item.id, { x: 0, y: y });
      y += verticalSpacing;
    }
  }

  // Create actions
  if (section.actions) {
    const actionX = horizontalSpacing;
    let actionY = startY + 100;
    
    for (const action of section.actions) {
      const actionColor = hexToRgb(section.color || '#666666');
      const actionNode = await createPillNode(
        action.label,
        actionX,
        actionY,
        nodeWidth - 40,
        50,
        actionColor
      );
      nodeMap.set(action.id, actionNode);
      nodePositions.set(action.id, { x: actionX, y: actionY });
      actionY += verticalSpacing;
    }
  }

  return y + sectionSpacing;
}

// Main import function
async function importJsonData(data: any) {
  try {
    // Clear existing selection
    figma.currentPage.selection = [];
    
    // Start position
    let y = 100;
    const startX = 100;

    // Create title
    const titleText = await createTextNode(
      `${data.title || 'User Journey Map'} (v${data.version || '1.0'})`,
      startX,
      y,
      20
    );
    y += 60;

    // Create sections
    if (data.sections) {
      for (const section of data.sections) {
        y = await createSection(section, y);
      }
    }

    // Create connections
    if (data.connections) {
      for (const connection of data.connections) {
        createConnector(connection.from, connection.to, connection.type);
      }
    }

    // Create user journeys as separate sections
    if (data.userJourneys) {
      y += sectionSpacing;
      const journeyHeader = await createTextNode('User Journeys', startX, y, 18);
      y += 60;

      for (const journey of data.userJourneys) {
        const journeyTitle = await createTextNode(journey.name, startX, y, 14);
        y += 40;

        // Create journey steps
        for (const step of journey.steps) {
          const stepText = `${step.page || step.modal || ''}: ${step.action}`;
          const stepNode = await createRectangleNode(
            stepText,
            startX,
            y,
            nodeWidth * 1.5,
            50,
            { r: 0.9, g: 0.9, b: 0.9 },
            4
          );
          y += verticalSpacing / 2;
        }
        y += sectionSpacing / 2;
      }
    }

    figma.notify('Import completed successfully!');
    figma.ui.postMessage({ type: 'import-complete' });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    figma.notify('Error importing: ' + errorMessage);
    figma.ui.postMessage({ type: 'import-error', error: errorMessage });
  }
}

// Handle messages from UI
figma.ui.onmessage = (msg: ImportMessage) => {
  if (msg.type === 'import-json') {
    importJsonData(msg.data);
  }
};

// Show UI
figma.showUI(__html__, { width: 400, height: 350 });
