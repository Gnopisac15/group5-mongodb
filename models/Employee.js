// models/Book.js

const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    img_url:{
        type: String,
        required: true
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Employee = mongoose.model('employee', EmployeeSchema);