const express = require("express");
const usersRouter = express.Router();
const models = require("./../Models.js");

usersRouter.get("/", (request, response) => {
    models.User.find({}, (err, results) => {
        if (err) return console.log(err);
        response.send(results);
    });
});

usersRouter.post("/", (request, response) => {
    const {login, password, fullName} = request.body;

    const user = new models.User({login, password, fullName, cars: []});

    user.save((err) => {
        if (err) return console.log(err);
        response.send("Posted");
    })
});

module.exports = usersRouter;