const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    wins: {
        type: Number, 
        default: 0
    }, 
    gamesPlayed: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model(
    "User",
    UserSchema,
    "user"
);