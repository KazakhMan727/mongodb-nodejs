const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const carsRouter = require("./routers/carsRouter");
const usersRouter = require("./routers/usersRouter");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/cars", carsRouter);
app.use("/users", usersRouter);

const CONNECTION_STRING = "mongodb+srv://KazakhMan:maha101107@cluster0.zhxop.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_STRING, function (err) {
    if (err) return console.log(err);
    app.listen(8080);
});