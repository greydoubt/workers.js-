# workers.js-

## Environment Variables (CF OpenWorkers.js Specification)

Environment variables (called **bindings**) are passed as the `env` parameter.

### Example

```js
export default {
  async fetch(request, env) {
    const apiKey = env.API_KEY;
    return new Response(apiKey);
  }
};
```

## 🔧 How to define **bindings** using static definition worker wrangler files

In `wrangler.toml`:


    ```
    toml id="cfw-env-3"

    [vars]

    API_KEY = "your-api-key"
    ```

Or via CLI:

    ```
    wrangler secret put API_KEY
    ```


### Using TOML for File Subsystem (FOML)
## Example KV structure (your “filesystem”)
# Store keys as file paths:

```/index.html        -> "<h1>Home</h1>"
/about.html        -> "<h1>About</h1>"
/blog/post-1.md    -> "# Post 1"
/data/config.json  -> "{ \"theme\": \"dark\" }"
```

## Worker Wrangler TOML File Rules
```
Use Wrangler env blocks (recommended)

Instead of multiple files, you keep everything in one wrangler.toml:

name = "app"
main = "worker.js"
compatibility_date = "2026-03-19"

[vars]
APP_NAME = "base-app"

[env.staging.vars]
APP_NAME = "staging-app"

[env.production.vars]
APP_NAME = "prod-app"

✔ This is the official Wrangler way to avoid file splitting.
```

```
✅ 2. Duplicate + override (simple approach)

You manually split configs:

wrangler.base.toml
wrangler.staging.toml
wrangler.prod.toml

Then run:

wrangler dev --config wrangler.staging.toml
```

## Populate Wranger TOML local file:
```
wrangler kv:key put --binding=FILES "/index.html" "<h1>Home</h1>"
wrangler kv:key put --binding=FILES "/about.html" "<h1>About</h1>"
wrangler kv:key put --binding=FILES "/data/config.json" '{ "theme": "dark" }'
```


## Assumed Minimal File System Structure

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

        workers.js
        
    /workers
      
        0aorkers.js
  
        1bzorkers.js

        workers.js
        
  
    z0a.js
  
    z1b.js
  
    zzzzzz3c.js


## Filtering Files
```
files
  .filter(f => f !== 'workers.js' && f.endsWith('.js'))
  .sort()
  .forEach(file => {
    require(path.join(dir, file));});
```
  
## Reading Files
```
fs.readdirSync(dir).forEach(file => {
  
      if (file === 'workers.js') return; // skip self
  
      if (path.extname(file) === '.js') {
            require(path.join(dir, file));
      }});
```

## Reading and Executing Files
```
fs.readdirSyncAndExec(dir).forEach(file => {
      
      if (file === 'workers.js') return;
      
      if (file.endsWith('.js')) {
            const mod = require(path.join(dir, file));
    
    if (typeof mod === 'function') {
      mod(); // run it
    } else if (mod && typeof mod.run === 'function') {
      mod.run();
    }}});
```


## Environment Variables

| Environment | How to access |
|------------|--------------|
| Cloudflare Workers | `env.MY_VAR` (from handler context) |
| Node.js | `process.env.MY_VAR` |
| With `.env` | `dotenv.config()` |
| Browser | Build tool (Vite, CRA, etc.) |
