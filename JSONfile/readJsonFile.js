// readJsonFile.js
const fs = require('fs');
const path = require('path');

function readJsonFile(filePath) {
  try {
    const data = fs.readFileSync(path.resolve(filePath), 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading or parsing file:', err);
    return null;
  }
}

// Example usage:
const result = readJsonFile('./users.json');
console.log(result);
