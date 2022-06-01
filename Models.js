const mongoose = require("mongoose");
const schemas = require("./Schemas.js");

const Car = mongoose.model("Car", schemas.CarSchema);
const User = mongoose.model("Car", schemas.UserSchema);

module.exports = {
    Car,
    User
}