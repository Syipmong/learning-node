const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const port = 3000
const dir = 'C:/NXDI/learning-node/pages'
const mongoose = require('mongoose')


const User = ('../models/user.js')

mongoose.connect(
    'mongodb://localhost/mydatabase', {}
).then(()=> console.log('Connected to MongoDb')).catch(err => console.log('could not connect to mongoDb ...', err))


app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.sendFile(path.join(dir, 'index.html'))
})

app.post(
    '/api/users', async (req,res) =>{

        try{
            let user = new User({
                name: req.body.name,
                email: req.body.email,
                age: req.body.age
            });
            user = await user.save();
            res.send(user)
        }
        catch(err){
            res.status(400).send(err.message)
        }

    }
)

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})

