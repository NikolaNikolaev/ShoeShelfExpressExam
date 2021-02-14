const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User.js');
const { SECRET } = require('../config/config.js');
const validateUserRegisterData = require('./helpers/validateUserRegisterData.js');

const register = ({ email, fullName, password, repeatPassword }) => {
    try {
        validateUserRegisterData({ email, password, repeatPassword });
        const user = new User({ email, fullName, password });
        return user.save();
    } catch (error) { throw error };
};

const login = async ({ email, password }) => {
    try {
        // Validate Username
        const user = await User.findOne({ email }).lean();
        if (!user) throw { message: 'Invalid Username or Password' };
        // Validate Password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) throw { message: 'Invalid Email or Password' };
        // Generate Token
        return jwt.sign({ email, _id: user._id }, SECRET);
    } catch (error) { throw error; };
};

const addShoeOffer = (userId, shoeOfferId) => {
    return User.findById(userId)
        .then((user) => {
            user.offersBought.push(shoeOfferId);
            return user.save();
        })
        .catch(err => { throw err; });
};

module.exports = {
    register,
    login,
    addShoeOffer,
};