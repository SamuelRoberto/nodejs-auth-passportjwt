const express = require('express');
const router = express.Router();
const dotenv = require('dotenv').load();
const jwt = require('jsonwebtoken');

const UserSchema = require('../../models/User.model');

const refreshTokenSec = parseInt(process.env.REFRESH_TOKEN_SEC);

/**
 * Login Route
 * You send JSON with 'email' and 'password' attributes and the server will generate Token if your account is valid.
 */
router.post('/login', (req, res) => {

    UserSchema
        .findOne({ email: req.body.email })
        .exec(function (err, user) {
            if (err) return res.status(500).json(err);
            if (!user) return res.status(401).send('L\'Utente non è stato trovato.');

            let possible_user = new UserSchema(user);
            possible_user.comparePassword(req.body.password, (err, isMatch) => {
                if (err) return res.status(500).json(err);
                if (!isMatch) return res.status(401).send('La pasword non è corretta.');

                let payload = { id: user._id, exp: parseInt(Date.now() / 1000 + refreshTokenSec) };
                let jwtOptions = {};

                jwtOptions.secretOrKey = process.env.SECRET_KEY;
                let token = jwt.sign(payload, jwtOptions.secretOrKey);
                return res.json({ result: { id: user._id, nome: user.nome, cognome: user.cognome }, token: token });
            });
        });
});

module.exports = router;