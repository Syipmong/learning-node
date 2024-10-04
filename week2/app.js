const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(
        '<h1>Hello, World!</h1>' +
        '<p>Welcome to the home page.</p>'
    );
  }else if(req.url === '/contact'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(
        '<h1>Contact</h1>' +
        '<p>Ways to contact us</p>' +
        '<ul>' +
        '<li>Phone: 123-456-7890</li>' +
        '<li>Email: <a href="mailto:info@example.com">info@example.com</a></li>' +
        '</ul>'
    );

  }else if(req.url === '/about'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(
        '<h1>About</h1>' +
        '<p>Learn more about us.</p>'
    );
  }else{
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end(
        '<h1>404 Not Found</h1>' +
        '<p>Sorry, the page you are looking for cannot be found.</p>'
    );
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
