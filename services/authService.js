const User = require('../models/User.js');

const register = ({ email, fullName, password, repeatPassword }) => {
    // TODO: Validate user data

    const user = new User({ email, fullName, password });
    return user.save();
};

module.exports = {
    register,
};