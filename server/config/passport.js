const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

module.exports = () => {
    // 로그인 성공 시 호출
    passport.serializeUser((user, done) => {
        console.log(user);
        done(null, user._id);
    });

    passport.deserializeUser((user, done) => {
        console.log(user);
        Users.findById(email, (err, user) => {
            done(null, user);
        })
    });

    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: true,
        passReqToCallback: true,
    }, (req, email, password, done) => {
        console.log('local-join callback called');
        User.findOne({email: email}, (findError, user) => {
            if (findError) return done(findError);
            if(!user) return done(null, false, {message : "존재하지 않는 아이디입니다"});
            return user.comparePassword(password, (passError, isMatch) => {
                if (isMatch) {
                    return done(null, user);
                }
                return done(null, false, {message: "비밀번호가 다릅니다"});
            });
        });
    }));

    passport.use(new GoogleStrategy({
        clientID: "44131842133-bu02afoee0urvhsm30569vhmn4vom40a.apps.googleusercontent.com",
        clientSecret: "uzMFi4e6yeB4uSw-4qvwgXW6",
        callbackURL: "/auth/google/callback"
    }, (token, tokenSecret, profile, done) => {
        console.log(profile);
    }))
};