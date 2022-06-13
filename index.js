import express from 'express'
import bodyParser from 'body-parser'
import mysql from 'mysql2'
import cors from 'cors'
const app = express()

// import routes
import router from "./src/routes/routes.js";

const corsOptions = {
  origin: 'http://localhost:8081'
}

const port = 8000;
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.urlencoded({extended: false}))
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.json())

app.use(router);
// MYSQL
app.get("/", (req, res) => {
  res.json({ message: "Welcome to SGC-SYS REST API." });
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
