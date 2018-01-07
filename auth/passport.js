module.exports = (passport) => {

    // Loading Passport Strategies
    require('./strategies/jwt.strategy')(passport);
}