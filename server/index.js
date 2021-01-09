const express = require('express');
const app = express();
const port = 3000;

const config =  require('./config/dev');
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

app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.use('/user', require('./routes/user'));

app.listen(port, () => {
    console.log('Server is Working...');
})