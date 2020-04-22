const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    friends: {
        type: Array,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Profiles", ProfileSchema);