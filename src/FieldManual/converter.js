import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Parses key-value pairs from the .conf file and returns a JSON object
function parseConfToJSON(data) {
  // Initialize an empty object to store our JSON structure
  const jsonObject = {};

  // Split the input data into lines
  const lines = data.split(/\r?\n/);

  // Process each line
  lines.forEach((line) => {
    // Skip empty lines and comments
    if (!line.trim() || line.startsWith('#')) return;

    // Extract the key and value
    const [key, ...rest] = line.split('=');
    if (!key) return;

    // Rejoin the rest in case there are '=' characters in the value
    const value = rest.join('=').trim();

    // Attempt to parse the value as JSON, or leave as a string if it fails
    try {
      // Remove surrounding quotes and extra spaces
      const strippedValue = value.replace(/^"(.*)"$/, '$1').trim();
      jsonObject[key.trim()] = JSON.parse(strippedValue);
    } catch (e) {
      jsonObject[key.trim()] = value.startsWith('"') ? value.slice(1, -1) : value;
    }
  });

  return jsonObject;
}


async function convertConfToJson(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const jsonData = parseConfToJSON(data);
    const jsonFilePath = filePath.replace('.conf', '.json');
    await fs.writeFile(jsonFilePath, JSON.stringify(jsonData, null, 2));
    console.log(`Converted: ${jsonFilePath}`);
  } catch (error) {
    console.error(`Error converting file: ${filePath}`, error);
  }
}

async function walkDirectory(directory) {
  const files = await fs.readdir(directory, { withFileTypes: true });
  for (const file of files) {
    const res = path.resolve(directory, file.name);
    if (file.isDirectory()) {
      await walkDirectory(res);
    } else if (file.name.endsWith('.conf')) {
      await convertConfToJson(res);
    }
  }
}

const directoryPath = path.join(__dirname, 'Categories');
walkDirectory(directoryPath);
