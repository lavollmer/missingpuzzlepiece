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

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));