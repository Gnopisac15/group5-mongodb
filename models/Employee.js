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
        type: String
    },
    birthdate: {
        type: Date
    },
    phone_number: {
        type: String
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Employee = mongoose.model('employee', EmployeeSchema);