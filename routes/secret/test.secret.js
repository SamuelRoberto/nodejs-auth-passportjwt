const express = require('express');
const router = express.Router();
const dotenv = require('dotenv').load();
const jwt = require('jsonwebtoken');
const passport = require("passport");

const UserSchema = require('../../models/User.model');

const refreshTokenSec = parseInt(process.env.REFRESH_TOKEN_SEC);

/**
 * Secret Route
 * Only with Token Auth in your Header you can see the content of this route.
 */
router.get('/secret', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.status(200).send('You are logged in!');
});

module.exports = router;