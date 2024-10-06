const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
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

const User = new mongoose.model("User", userSchema); 