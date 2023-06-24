require('dotenv').config();

module.exports = {
    development : {
        host : process.env.HOST_DEV,
        port : process.env.PORT_DEV,
        database : process.env.DB_NAME_DEV,
        user: process.env.DB_USER_DEV,
        password : process.env.DB_PASSWORD_DEV
    },
    production : {
        host : process.env.DB_HOST_PROD,
        port : process.env.DB_PORT_PROD,
        database : process.env.DB_NAME_PROD,
        user: process.env.DB_USER_PROD,
        password : process.env.DB_PASSWORD_PROD
    }
}