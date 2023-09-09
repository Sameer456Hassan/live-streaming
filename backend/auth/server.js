const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 


const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: '',
  database: 'church',
});

connection.connect();

app.post('/auth', function (req, res) {
  const streamkey = req.body.key;

  if (streamkey === 'supersecret') {
    res.status(200).send();
    return;
  }

  res.status(403).send();
});

app.get('/', function (req, res) {
  res.send('abcd');
});
app.post('/streaming', function (req, res) {
  const data = req.body.stream; // Assuming data is sent in the request body
  console.log(data);

  // Insert the data into the database
  const query = `UPDATE streaming SET streaming=${data} WHERE id=1`;

  connection.query(query, function (error, results, fields) {
    if (error) throw error;

    console.log('Data inserted:', results);
    res.send('Data inserted successfully');
  });
});

app.listen(8000, function () {
  console.log('listening on port 8000!');
});
