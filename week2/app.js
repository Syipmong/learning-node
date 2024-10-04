const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`Received request method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);
  console.log(`Request Headers:`, req.headers);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Check your terminal for request details!\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
