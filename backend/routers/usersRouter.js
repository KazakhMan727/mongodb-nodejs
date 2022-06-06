const express = require("express");
const usersRouter = express.Router();
const models = require("./../Models.js");

usersRouter.get("/", (request, response) => {
    models.User.find({}, (err, results) => {
        if (err) return console.log(err);
        response.send(results);
    });
});

usersRouter.get("/:id", async (request, response) => {
    let id = request.params.id;
    let user = await models.User.findById(id);
    response.status(200).send(user);
});

usersRouter.post("/", (request, response) => {
    const {login, password, fullName} = request.body;

    const user = new models.User({login, password, fullName, cars: []});

    user.save((err) => {
        if (err) response.status(500).send("error");
        response.send("Posted");
    })
});

usersRouter.post("/addCar", async (request, response) => {
    const {userId, carId} = request.body;

    let car = await models.Car.findById(carId);

    let user = await models.User.findById(userId);
    user.cars.push(car);

    await models.User.findByIdAndUpdate(userId, user);
    response.send("car added");
});

module.exports = usersRouter;