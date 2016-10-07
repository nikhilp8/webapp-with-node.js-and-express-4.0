var passport = require('passport');

module.exports = function(nav) {
    app.use(passport.initialize());
    app.use(passport.session());
}