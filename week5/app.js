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


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(path.join(dir, 'index.html'))
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})

