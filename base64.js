// Encode (UTF-8 string → Base64)
function encodeBase64(str) {
  return typeof window === "undefined"
    ? Buffer.from(str, "utf-8").toString("base64")   // Node
    : btoa(unescape(encodeURIComponent(str)));       // Browser-safe
}

// Decode (Base64 → UTF-8 string)
function decodeBase64(b64) {
  return typeof window === "undefined"
    ? Buffer.from(b64, "base64").toString("utf-8")   // Node
    : decodeURIComponent(escape(atob(b64)));         // Browser-safe
}
