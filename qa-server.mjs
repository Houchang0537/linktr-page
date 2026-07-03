import { createReadStream, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const root = process.cwd();
const types = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".png": "image/png" };

createServer((request, response) => {
  const path = normalize(join(root, request.url === "/" ? "index.html" : request.url));
  try {
    const stat = statSync(path);
    if (!stat.isFile() || !path.startsWith(root)) throw new Error();
    response.writeHead(200, { "Content-Type": `${types[extname(path)] || "application/octet-stream"}; charset=utf-8` });
    createReadStream(path).pipe(response);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
}).listen(8000, "127.0.0.1");
