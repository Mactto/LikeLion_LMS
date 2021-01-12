const express = require('express');
const path = require('path');
const session = require('express-session');
const db = require('./models/User');
const config = require('./config/dev');
const passport = require('passport');
const passportConfig = require('./config/passport')
const app = express();
const port = 3000;

const mongoose = require('mongoose');

const connect = mongoose.connect(config.mongoURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }    
)
.then(() => console.log('MongoDB Connected...'))
.catch((err) => console.log(err));


app.use(session({secret: '12345', resave: true, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

passportConfig();
app.use(express.urlencoded({extended: false}))
app.use(express.json());


app.use('/user', require('./routes/user'));

app.listen(port, () => {
    console.log('Server is Working...');
})