const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [10, "{PATH} must be at least 10 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least 3 characters long"]
    }
}, {timestamps: true})

module.exports = mongoose.model('Jokes', JokeSchema)