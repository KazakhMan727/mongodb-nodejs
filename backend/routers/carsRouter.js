const express = require("express");
const carsRouter = express.Router();
const models = require("./../Models.js");

carsRouter.get("/", (request, response) => {
    models.Car.find({}, (err, results) => {
        if (err) return console.log(err);
        response.send(results);
    });
});

carsRouter.get("/:id", async (request, response) => {
    let id = request.params.id;
    let car = await models.Car.findById(id);
    response.status(200).send(car);
});

carsRouter.post("/", (request, response) => {
    const {model, color, year} = request.body;

    const car = new models.Car({model, color, year});

    car.save((err) => {
        if (err) response.status(500).send("error");
        response.send("Posted");
    })
});

module.exports = carsRouter;