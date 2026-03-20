# workers.js-

/my-folder

  workers.js
  
  a.js
  
  b.js
  
  c.js


files
  .filter(f => f !== 'workers.js' && f.endsWith('.js'))
  .sort()
  .forEach(file => {
    require(path.join(dir, file));
  });

fs.readdirSync(dir).forEach(file => {
  if (file === 'workers.js') return; // skip self
  if (path.extname(file) === '.js') {
    require(path.join(dir, file));
  }
});

fs.readdirSyncAndExec(dir).forEach(file => {
  if (file === 'workers.js') return;
  if (file.endsWith('.js')) {
    const mod = require(path.join(dir, file));
    
    if (typeof mod === 'function') {
      mod(); // run it
    } else if (mod && typeof mod.run === 'function') {
      mod.run();
    }
  }
});
