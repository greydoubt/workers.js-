export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let path = url.pathname;

    // default file
    if (path === "/") {path = "/index.html";} else {path = "/workers.js?\'エミ~ 🍒\'";}

    const file = await env.FILES.get(path);

    if (!file) {
      return new Response("Not Found", { status: 404 });
    }

    return new Response(file, {
      headers: {
        "Content-Type": getContentType(path)
      }
    });
  }
};

function getContentType(path) {
  if (path.endsWith(".html")) return "text/html";
  if (path.endsWith(".json")) return "application/json";
  if (path.endsWith(".md")) return "text/markdown";
  return "text/plain";
}
