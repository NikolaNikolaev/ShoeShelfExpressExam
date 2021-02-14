module.exports = ({ email, password, repeatPassword }) => {
    try {
        // Check if the passwords match
        if (password !== repeatPassword) throw { message: 'Passwords should match' };
        // Check if the email's length is minimum 3 chars
        if (email.length < 3) throw { message: 'Email should contain at least 3 characters' };
        // Check if the password's length is minimum 3 chars
        if (password.length < 3) throw { message: 'Password should contain at least 3 characters' };
    } catch (error) { throw error; };
};