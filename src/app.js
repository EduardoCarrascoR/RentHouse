const express = require('express');
const bodyP = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const form = require('./routes/forms.js');

mongoose.connect('mongodb://localhost:27017/rentHouse', {useNewUrlParser: true}).then(db => console.log('db is connected'))
    .catch(err => console.log(err));
const app = express();

//settings
app.set('port', process.env.PORT || 3001);
//middleware
app.use(morgan('dev'));
app.use(bodyP.json());
//routes
app.use('/forms', form);
//static files
//error handdlers

//conect server
app.listen(app.get('port'), () => {
    console.log('server on port: ', app.get('port'));
});