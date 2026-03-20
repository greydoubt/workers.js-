import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const dir = path.resolve();

const files = fs.readdirSync(dir);

for (const file of files) {
  if (file === 'workers.js') continue;
  if (file.endsWith('.js')) {
    const fullPath = path.join(dir, file);
    await import(pathToFileURL(fullPath));
  }
}
