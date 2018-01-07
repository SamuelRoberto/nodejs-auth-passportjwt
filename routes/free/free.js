const dotenv = require('dotenv').load();
const pathAPI = process.env.PATH_API;

module.exports = (app) => {

    // Loading Free Routes
    const test = require('./test.free');

    app.use(test);
}