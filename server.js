const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); // for parsing application/json

//The GET route sends a simple message to the browser
app.get('/feedback', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

//the POST route logs the request body to the console and sends a response
app.post('/feedback', (req, res) => {
  console.log(req.body);
  res.status(201).json({ message: 'Feedback received!' });
});

fetch('https://missing-puzzle-piece-b568b18a56c7.herokuapp.com/feedback')
  .then(response => {
    console.log(response.status); // Log the response status
    console.log(response.headers.get('Content-Type')); // Log the Content-Type header
    return response.text(); // Get the response body as text
  })
  .then(text => {
    console.log(text); // Log the response body
    return JSON.parse(text); // Try to parse the response body as JSON
  })
  .then(data => {
    // Use the parsed data
  })
  .catch(error => {
    console.error(error); // Log any errors
  });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));