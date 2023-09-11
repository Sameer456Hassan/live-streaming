const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'church',
});

connection.connect();

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

app.post('/get_stream', function (req, res) {
  // Insert the data into the database
  const query = `SELECT * FROM streaming WHERE id=1`;

  connection.query(query, function (error, results, fields) {
    if (error) throw error;

    console.log('Data inserted:', results);
    res.send(results[0]);
  });
});

app.listen(8010, function () {
  console.log('listening on port 8010!');
});
