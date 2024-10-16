const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('../models/user');
const crypto = require('crypto');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = 'mongodb://localhost/mydatabase';
mongoose.connect(mongoURI, {
    serverSelectionTimeoutMS: 5000
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err.message);
});

const jwtSecret = crypto.randomBytes(64).toString('hex');
console.log(jwtSecret);

app.get('/', (_req, res) => {
    res.send("Hello world");
});

app.get('/api/users',(_req, res) =>{
    User.find().then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send('Server error');
    });
})

app.post('/api/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        let user = await User.findOne({ email });
        if (user) return res.status(400).send("User already exists");

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({
            name,
            email,
            password: hashedPassword
        });
        await user.save();

        res.send('User registered successfully');
    } catch (err) {
        res.status(400).send(err.message);
    }
});

app.post(
    '/api/login', async (_req, res) =>{

        try {
            const {email, password} = _req.body;

           const user = await User.findOne({email})
           if(!user) return res.status(400).send('Invalid email or password');
    
           
           const validPassword = await bcrypt.compare(password, user.password);
             if(!validPassword) return res.status(400).send('Invalid email or password');
    
             const token = jwt.sign({ _id: user._id, email: user.email}, jwtSecret, {expiresIn: '1h'})
    
             res.send({token})
        } catch (err) {

            res.status(400).send(err.message)
            
        }
    }
)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});