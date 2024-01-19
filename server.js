const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const connectToDB = require("./config/dbConnection");

connectToDB();
const app = express();
const port = process.env.PORT || 6970;

app.use(express.json());
app.use("/", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, (req, res) => {
    console.log(`Serving on: http://localhost:${port}`);
});
