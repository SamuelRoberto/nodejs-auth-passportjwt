const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').load();

const morgan = require('morgan');
const chalk = require('chalk');

const jwt = require('jsonwebtoken');

// LOADING MONGOOSE MODULES
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_DB);

// LOADING PASSPORT MODULES
const passport = require("passport");
require('./auth/passport')(passport);

const app = express();

app.use(passport.initialize());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

// VALUE ENV
const port = process.env.PORT;
const env = process.env.NODE_ENV;

// CORSE & BODY PARSE & MORGAN INIT
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());
app.disable('x-powered-by');
app.use(morgan('combined'));

// ROUTER IMPLEMENTATION
require('./routes/auth/auth')(app);
require('./routes/free/free')(app);
require('./routes/secret/secret')(app);

// ENTRY POINT
app.listen(port, () => {
    console.log('%s NodeJS-PassportJWT Boilerplate is running at http://localhost:%d in %s mode', chalk.green('✓'), port, env);
    console.log('  Press CTRL-C to stop\n');
});