var passport = require('passport');

module.exports = function(nav) {
    app.use(passport.initialize());
    app.use(passport.session());
    
    passport.serializer(function(user,done){
        done(null, user);
    });
    passport.deserializer(function(userId,done){
        done(null, user);
    });
}