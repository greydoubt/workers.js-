const fs = require('fs');
const path = require('path');

const dir = __dirname;
const fs = require('fs');
const path = require('path');

const dir = __dirname;

// Read all files in this directory
const files = fs.readdirSync(dir);

// Load them in sorted order
files
  .filter(f => f !== 'workers.js' && f.endsWith('.js'))
  .sort()
  .forEach(file => {
    const fullPath = path.join(dir, file);
    console.log(`Loading: ${file}`);
    require(fullPath);
  });
