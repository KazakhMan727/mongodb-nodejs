const express = require("express");
const carsRouter = express.Router();
const models = require("./../Models.js");

carsRouter.get("/", (request, response) => {
    models.Car.find({}, (err, results) => {
        if (err) return console.log(err);
        response.send(results);
    });
});

carsRouter.post("/", (request, response) => {
    const {model, color, year} = request.body;

    const car = new models.Car({model, color, year});

    car.save((err) => {
        if (err) return console.log(err);
        response.send("Posted");
    })
});

module.exports = carsRouter;