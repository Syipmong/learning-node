const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const cluster = require('cluster')
const http = require('http')
const numCPUs = require('os').cpus().length


const app = express()
const PORT = 3000

if(cluster.isMaster){
    console.log(`Master ${process.pid} is running`)

    for(let i = 0; i< numCPUs; i++){
        cluster.fork()
    }
    
    cluster.on('exit', (worker, code, signal) =>{
        console.log(`Worker ${worker.process.pid} died`)
    })


}else{
    http.createServer()
}


app.listen(
    PORT,
    () => console.log(`Server running on http://localhost:${PORT}`)
)