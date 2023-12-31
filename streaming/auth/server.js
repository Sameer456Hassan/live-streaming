const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/auth', function (req, res) {
  const streamkey = req.body.key;

  if (streamkey === 'supersecret') {
    res.status(200).send();
    return;
  }

  res.status(403).send();
});

app.listen(8000, function () {
  console.log('listening on port 8000!');
});
