const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
require('colors')
const connectDb = require("./config/config");
// dotenv confiq
dotenv.config()

// db connection 
connectDb();
// rest object
const app = express();

//middlwares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

// routes
app.use("/api/items", require("./routes/itemRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/bills", require("./routes/billsRoute"));
// port
const PORT = process.env.PORT || 5000;

// listen
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`.bgCyan.white);
})