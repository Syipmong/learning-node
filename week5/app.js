const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const User = require('../models/user.js');

const app = express();
const port = 3000;
const dir = 'C:/NXDI/learning-node/pages';

mongoose.connect(
    'mongodb://localhost/mydatabase', {}
).then(()=> console.log('Connected to MongoDb')).catch(err => console.log('could not connect to mongoDb ...', err));

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (_req, res) => {
    res.sendFile(path.join(dir, 'index.html'));
});

app.post(
    '/api/users', async (req, res) => {
        try {
            let user = new User({
                name: req.body.name,
                email: req.body.email,
                age: req.body.age
            });
            user = await user.save();
            res.send(user);
        } catch (err) {
            res.status(400).send(err.message);
        }
    }
);

app.get('/api/users', (req, res)=>{
    User.find().then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send('Server error');
    });
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

