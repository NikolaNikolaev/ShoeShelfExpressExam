const User = require('../models/User.js');
const validateUserRegisterData = require('./helpers/validateUserRegisterData.js');

const register = ({ email, fullName, password, repeatPassword }) => {
    try {
        validateUserRegisterData({ email, password, repeatPassword });
        const user = new User({ email, fullName, password });
        return user.save();
    } catch (err) { throw err };
};

module.exports = {
    register,
};