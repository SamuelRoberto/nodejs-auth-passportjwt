const express = require('express');
const router = express.Router();
const dotenv = require('dotenv').load();
const jwt = require('jsonwebtoken');

const UserSchema = require('../../models/User.model');

const refreshTokenSec = parseInt(process.env.REFRESH_TOKEN_SEC);

/**
 * Register Route
 * Register User into MongoDB
 */
router.post('/register', (req, res) => {

    let bodyUser = new UserSchema(req.body);
    bodyUser.save((err, user) => { if (err) return res.status(500).json(err); return res.status(200).json(bodyUser); })

});

module.exports = router;