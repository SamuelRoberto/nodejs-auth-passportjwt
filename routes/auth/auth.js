const dotenv = require('dotenv').load();
const pathAPI = process.env.PATH_API;

module.exports = (app) => {

    // Loading Auth Routes
    const login = require('./login.auth');
    const register = require('./register.auth');

    app.use(pathAPI, login);
    app.use(pathAPI, register);
}