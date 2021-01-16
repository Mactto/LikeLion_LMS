const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require("../models/User");

passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((obj, done) => {
    console.log(obj);
    done(null, obj);
})

passport.use(new GoogleStrategy({
    clientID: "44131842133-bu02afoee0urvhsm30569vhmn4vom40a.apps.googleusercontent.com",
    clientSecret: "uzMFi4e6yeB4uSw-4qvwgXW6",
    callbackURL: "http://localhost:5000/api/user/auth/google/callback",
    proxy: true
}, (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    User.findOne({"googleId": profile.id}, (err, user) => {
        if (err) return done(err);
        if (user) return done(null, user);
        else {
            var newUser = User();
            newUser.googleId = profile.id;
            newUser.name = profile.displayName;
            newUser.save((err) => {
                if(err) throw err;
                console.log("새 유저 등록 완료");
                return done(null, newUser);
            })
        }
    })
}))