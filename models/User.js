let mongoose = require("mongoose");
let Schema = mongoose.Schema;   // schema maps to a collection
const bcrypt = require("bcryptjs");

let userSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "user",
        enum: ["admin", "user"],
        required: true
    },
    avatarLink: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }

}, {
    timeStamp: true
});

module.exports = mongoose.model("User", userSchema, "Users" );
