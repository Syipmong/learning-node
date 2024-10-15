const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const port = 3000


let users = [
    {id: 1, name: 'Alice', email: 'alice@gmail.com'},
    {id: 2, name: 'Bob', email: 'bob@gmail.com'},
    {id: 3, name: 'Charlie', email: 'charlie@gmail.com'},
    {id: 4, name: 'David', email: 'david@gmail.com'},
    {id: 5, name: 'Eve', email: 'eve@gmail.com'}
]
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.get('/api/users',(req,res)=>{
    res.json(users)
})



app.listen(
    port,()=>{
        console.log(`Server is running on http://localhost:${port}`)
    }
)