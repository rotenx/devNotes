const mongoose = require("mongoose");
const validator = require("validator")
const randtoken = require('rand-token');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
    password: {
        type: String, required: true
    },
    token:{
        type:String,
        default: function() {
            return randtoken.generate(64);
        }
    }
})

const User = new mongoose.model("User",userSchema);

module.exports = User;