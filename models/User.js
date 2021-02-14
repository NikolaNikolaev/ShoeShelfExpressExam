const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    offersBought: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ShoeOffer'
    }],
});

// •	Email - string (required), unique
// •	Full Name - sting
// •	Password - string (required)
// •	Offers Bought - a collection of Offers 

module.exports = mongoose.model('User', userSchema);