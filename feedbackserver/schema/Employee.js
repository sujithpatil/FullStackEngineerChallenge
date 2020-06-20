const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    name: String,
    email: String,
    id: String,
    department: String,
    isAdmin: Boolean,
    reviewing: [Object]
});

module.exports = EmployeeSchema;