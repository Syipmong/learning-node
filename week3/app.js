const express = require('express');
const app = express();
const port = 3000;


app.use(
    '/',
    (req,res,next)=>{
        console.log(
            `${req.method} Method on ${req.url}`
        )
        next();
    }
)

app.get(
    '/',
    (req, res) =>{
        res.send('Hello World');
    }
);

app.get(
    '/about',
    (req,res) =>{
        res.send('About Us');
    }
);


app.listen(
    port,
    () => console.log(`Listening on port ${port}...`)
)