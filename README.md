# workers.js-



/my-folder

    dockers.js

    borkers.js

    forkers.js

    porkers.js

    porters.js

    workers.js

    /subdir
      
        0a.js
  
        1b.js
        
  
    0a.js
  
    1b.js
  
    3c.js


## Filtering Files
files
  .filter(f => f !== 'workers.js' && f.endsWith('.js'))
  .sort()
  .forEach(file => {
    require(path.join(dir, file));});
  
## Reading Files
fs.readdirSync(dir).forEach(file => {
  
      if (file === 'workers.js') return; // skip self
  
      if (path.extname(file) === '.js') {
            require(path.join(dir, file));
      }});

## Reading and Executing Files
fs.readdirSyncAndExec(dir).forEach(file => {
      
      if (file === 'workers.js') return;
      
      if (file.endsWith('.js')) {
            const mod = require(path.join(dir, file));
    
    if (typeof mod === 'function') {
      mod(); // run it
    } else if (mod && typeof mod.run === 'function') {
      mod.run();
    }}});


## Environment Variables

| Environment | How to access |
|------------|--------------|
| Cloudflare Workers | `env.MY_VAR` (from handler context) |
| Node.js | `process.env.MY_VAR` |
| With `.env` | `dotenv.config()` |
| Browser | Build tool (Vite, CRA, etc.) |
