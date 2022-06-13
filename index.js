import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()

// import routes
import router from "./src/routes/routes.js";

const corsOptions = {
  origin: 'http://localhost:8080'
}

const port = 8000;
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.urlencoded({extended: false}))
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.json())

app.use(router);

// default route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to SGC-SYS REST API." });
});

app.listen(port, () => {
  console.log(`Server running in https://localhost:${port}`);
});
