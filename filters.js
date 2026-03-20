
files
  .filter(f => f !== 'workers.js' && f.endsWith('.js'))
  .sort()
  .forEach(file => {
    require(path.join(dir, file));
  });
