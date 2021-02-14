const User = require('../models/User.js');

const register = ({ email, fullName, password, repeatPassword }) => {
    try {
        // Check if the passwords match
        if (password !== repeatPassword) throw { message: 'Passwords should match' };
        // Save User Data
        const user = new User({ email, fullName, password });
        return user.save();
    } catch (err) { throw err; };
};

module.exports = {
    register,
};