const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const port = 3000


let users = [
    {id: 1, name: 'Alice', email: 'alice@gmail.com', age: 25, city: 'New York'},
    {id: 2, name: 'Bob', email: 'bob@gmail.com', age: 30, city: 'Los Angeles'},
    {id: 3, name: 'Charlie', email: 'charlie@gmail.com', age: 35, city: 'Chicago'},
    {id: 4, name: 'David', email: 'david@gmail.com', age: 40, city: 'Houston'},
    {id: 5, name: 'Eve', email: 'eve@gmail.com', age: 28, city: 'Phoenix'}
]
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.get('/api/users',(req,res)=>{
    res.json(users)
})

app.get('/api/users/:id', (req,res)=>{
    const user = users.find( u => u.id === parseInt(req.params.id));
    if(!user){
        res.status(404).send('User not found')
    }
    res.json(user)
})

app.post('/api/users', (req,res)=>{
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        city: req.body.city
    }
    users.push(newUser)
    res.status(201).json(newUser)
})

app.put('/api/users/:id', (req, res)=>{
    const user = users.find(u => u.id === parseInt(req.params.id));

    if(!user){
        res.status(404).send("User is not found");
    }
    user.name = req.body.name,
    user.age = req.body.age,
    user.email = req.body.email,
    user.city = req.body.city

    if(!req.body.name || !req.body.email) return res.status(400).json({
        message: "Name and email are required"
    } )
    res.json(user)
})

app.delete('/api/users/:id', (req, res)=>{
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if(userIndex === -1) return res.status(404).send("User is not found");
        const deletedUser = users.splice(userIndex, 1);
        res.json(deletedUser)
})


app.listen(
    port,()=>{
        console.log(`Server is running on http://localhost:${port}`)
    }
)