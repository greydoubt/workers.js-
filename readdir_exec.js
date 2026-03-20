
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
