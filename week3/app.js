const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Handle GET request
app.get('/', (req, res) => {
  res.send('Submit your data using POST to /submit');
});

// Handle POST request
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`Received data: Name - ${name}, Email - ${email}`);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
