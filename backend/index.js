const express = require("express");
const cors = require("cors");

// bootstrap database connection
const database = require('./config/database');
database();

// set up express
const app = express();
app.use(express.json());
app.use(cors());

// set up routes
app.use("/users", require("./routes/userRouter"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));
