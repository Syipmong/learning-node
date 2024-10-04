import { createServer } from 'http';

const server = createServer(
    (req,res)=>{
        
        res.writeHead(200,{
            'content-type': 'text/html'
        });
        res.end('Hello World\n I am a great person');
})


server.listen(3000,()=>{
    console.log("Server running at http://localhost:3000/")
}
)