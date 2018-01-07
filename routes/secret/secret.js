const dotenv = require('dotenv').load();
const pathAPI = process.env.PATH_API;

module.exports = (app) => {

    // Loading Secret Routes
    const test = require('./test.secret');

    app.use(test);
}