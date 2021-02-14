const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config/config.js');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
    },
    fullName: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        minLength: 3,
    },
    offersBought: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ShoeOffer'
    }],
});

// Hash password before save user data
userSchema.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(SALT_ROUNDS);
        const hashPassword = await bcrypt.hash(this.password, salt);
        this.password = hashPassword;
        next();
    } catch (error) {
        console.log(error);
    };
});

// •	Email - string (required), unique
// •	Full Name - sting
// •	Password - string (required)
// •	Offers Bought - a collection of Offers 

module.exports = mongoose.model('User', userSchema);