const express = require('express');
const router = express.Router();
const dotenv = require('dotenv').load();
const jwt = require('jsonwebtoken');

const UserSchema = require('../../models/User.model');

const refreshTokenSec = parseInt(process.env.REFRESH_TOKEN_SEC);

/**
 * Free Route
 * All users can see this free route. You don't need an Authorization Token
 */
router.get('/free', (req, res) => {
    return res.status(200).send('All users can see this free route.');
});

module.exports = router;