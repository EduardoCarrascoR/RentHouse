const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = new Schema({
    firstName: String,
    lastName: String,
    adressHouse: String,
    email: String,
    yearsold: Number
});

module.exports = mongoose.model('form', formSchema);