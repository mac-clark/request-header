const express = require('express');
const app = express();

// Middleware to enable CORS
const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

// Route to serve the index.html file
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Route to handle requests to /api/whoami
app.get('/api/whoami', function (req, res) {
  const ipaddress = req.ip;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  res.json({ ipaddress, language, software });
});

// Listen on the port defined in the environment variable or default to 3000
const PORT = process.env.PORT || 3000;
const listener = app.listen(PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
