const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')


const app = express()
const PORT = 3000

app.get('/api/name', (req, res) => {
    res.send('Hello week7')
})


app.listen(
    PORT,
    () => console.log(`Server running on http://localhost:${PORT}`)
)