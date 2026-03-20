
fs.readdirSync(dir).forEach(file => {
  if (file === 'workers.js') return; // skip self
  if (path.extname(file) === '.js') {
    require(path.join(dir, file));
  }
});
