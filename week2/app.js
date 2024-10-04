import { createServer } from "http";

const server = createServer((req, res) => {
  console.log(`Received request method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);
  console.log(`Request Headers:`, req.headers);

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Check your terminal for request details!\n");
  if (!res.headersSent) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, world!');
  }

  else if (req.method === "GET" && req.url === "/json") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    const jsonResponse = {
      message: "Hello, json",
      status: 200,
    };
    res.end(JSON.stringify(jsonResponse));
  } else if (req.method === "GET" && req.url === "/html") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello, HTML</h1>");
  } else if (req.method === "POST") {
    res.writeHead(200, { "content-type": "test/plain" });
    res.end("This is a POST request");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
