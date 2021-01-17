const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require("../models/User");

passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((obj, done) => {
    done(null, obj);
})

passport.use(new GoogleStrategy({
    clientID: "44131842133-bu02afoee0urvhsm30569vhmn4vom40a.apps.googleusercontent.com",
    clientSecret: "uzMFi4e6yeB4uSw-4qvwgXW6",
    callbackURL: "http://localhost:5000/api/user/auth/google/callback",
    proxy: true
}, (accessToken, refreshToken, res, done) => {
    User.findOne({"googleId": res.id}, (err, user) => {
        if (err) return done(err);
        if (user) return done(null, user);
        else {
            if (res.emails[0].value.includes("likelion.org")) {
                var newUser = User();
                newUser.googleId = res.id;
                newUser.name = res.displayName;
                newUser.save((err) => {
                    if(err) throw err;
                    console.log("새 유저 등록 완료");
                    return done(null, newUser);
            })}
            else {
                console.log("likelion.org 계정만 로그인 가능합니다.")
                return done(null, null);
            }
        }
    })
}))