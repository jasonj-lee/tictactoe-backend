import { ObjectId } from "mongodb";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    firebaseUid: {
        type: String, 
        required: true,
        unique: true
    },
    id: {
        type: ObjectId
    },
    name: {
        type: String,
        required: true
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