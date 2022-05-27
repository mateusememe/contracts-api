const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2')
const cors = require('cors')
const app = express()
const db = require('../config/db.config.js')

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
const connection = Database
app.get("/", (req, res) => {
  res.json({ message: "Welcome to SGC-SYS app." });
});
app.get('/api', (req, res) => {
  
  connection.connect((err) => {
    if (err) throw err
    console.log("I'm Connected");
    res.send("I'm Connected")

    const sql = "SELECT * FROM anexo;"

    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Result: %o", result);
    });
  })
  

});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
