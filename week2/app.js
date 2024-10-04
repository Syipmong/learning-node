import { createServer } from 'http';

const server = createServer((req, res)=>{
    if(req.method === 'GET'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('This is a Get request')
    } else if(req.method === 'POST'){
        res.writeHead(200,{'content-type': 'test/plain'});
        res.end('This is a POST request');
    }else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found');
    }
})

server.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})