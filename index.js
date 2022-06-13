const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2')
const cors = require('cors')
const app = express()
const db = require('./src/config/database')

const corsOptions = {
  origin: 'http://localhost:8081'
}

const port = 8000;
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.urlencoded({extended: false}))
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.json())

// MYSQL
app.get("/", (req, res) => {
  res.json({ message: "Welcome to SGC-SYS app." });
});
app.get('/api', (req, res) => {
  
  console.log("I'm Connected");
  res.send("I'm Connected")
  const sql = "SELECT * FROM anexo;"
  db.query(sql, function (err, results) {
    if (err) throw err;

    console.log("Result: %o", results);
  });
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
