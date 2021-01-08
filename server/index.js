const express = require('express');
const app = express();
const port = 3000;

const config =  require('./config/dev');
const mongoose = require('mongoose');
const connect = mongoose.connect(config.mongoURI,
    {
        useNweUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }    
)
.then(() => console.log('MongoDB Connected...'))
.catch((err) => console.log(err));

app.listen(port, () => {
    console.log('Server is Working...');
})