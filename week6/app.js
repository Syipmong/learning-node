const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const app = express()
const bodyParser = require('body-parser')
const User = require('../models/user')
const PORT = 3000


app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.post(
    '/api/register', async (req,res) =>{
        try{
            const {email, name, password} = req.body;

            let user = await User.findOne({email})
            if(user) return res.status(400).send("User already exists")

                const salt = await bcrypt.genSalt(10)
                const hashedPassword = await bcrypt.hash(password, salt)

                user = new User({
                    name,
                    email,
                    password: hashedPassword
                })
                await user.save();
        }
        catch(err){
            console.log(err)
        }
    }

)

app.listen(PORT, ()=>{
    console.log("Server is running on http://localhost:3000")
})