const config = {
    development: {
        PORT: 5000,
        SALT_ROUNDS: 1,
        SECRET: 'mysecretsecret',
    },
    production: {
        PORT: 80,
        SALT_ROUNDS: 13,
    }
};

module.exports = config[process.env.NODE_ENV.trim()];