const express = require('express');
const path = require('path');
const session = require('express-session');
const config = require('./config/dev');
const passport = require('passport');
const passportConfig = require('./config/passport')
const cors = require('cors');
const app = express();
const port = 5000;

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

app.use(cors());

app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.use(session({secret: '12345', resave: true, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/user', require('./routes/user'));
app.use('/api/class', require('./routes/class'));

app.get('/api', (req, res) => {
    res.send("home");
})

app.listen(port, () => {
    console.log('Server is Working...');
})