const express = require('express');
const app = express();
const cors = require ('cors');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3000

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'aerocontrol',
});

app.use(cors())
app.use(express.json())

app.get('/clientes', cors(),(req, res)=>{
  res.send('hola')
});


app.get('/alumnos', (req, res) => {
  
connection.query(
  'SELECT * FROM `vuelo` WHERE `id_vuelo` = ?',
  ['3'],
  function (err, results) {
    console.log(results);
    res.json(results);
  }
);
  //console.log(req.query);
  //res.send('Hello Worlld!');
});

app.get('/docentes/:control', (req, res) => {
  console.log(req.params);
  res.send('Hello World!');
});

app.post('/directivos', (req, res) => {
  console.log(req.body);
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${3000}`);
});