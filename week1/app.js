const fs = require('fs');

fs.writeFileSync('hello.txt','Hello from Nodejs week one tutorial')

fs.readFile('hello.txt', 'utf-8', (e, data)=>{
    if(e){
        throw e
    }
    console.log(data)
})