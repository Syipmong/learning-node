const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',
    (req,res) =>{
        res.send("Welcome to the home page")
    }
)
app.get(
    '/contact',
    (req,res) =>{
        res.send("Contact Us");
    
    }
    
)

// error handling
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})


app.listen(port,
    () =>{
        console.log(`Listening on Port ${port}...`)

    }
)