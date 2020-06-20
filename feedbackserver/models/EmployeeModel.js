const mongoose = require('mongoose');

const Schema = require('../schema/Employee');

const EmployeeModel = new mongoose.model('Employee', Schema);

module.exports = EmployeeModel;