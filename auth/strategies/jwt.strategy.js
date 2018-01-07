const dotenv = require('dotenv').load();
const jwt = require('jsonwebtoken');

const User = require('../../models/User.model');

/**
 * For each request that need authorization this middleware will check if the token is valid and if the user exists.
 * The middleware will populate 'req.user' with user info.
 * 
 * When you call the middleware 'assport.authenticate('jwt', { session: false })' in your route you can use 'req.user' to retrive
 * informations of the user that made the request.
 */
module.exports = (passport) => {
    const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
    
    let opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = process.env.SECRET_KEY;
    
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        User.findOne({_id: jwt_payload.id}, function(err, user) {
            if (err) return done(err, false);

            if (user) return done(null, user);
            else return done(null, false);
        });
    }));
}