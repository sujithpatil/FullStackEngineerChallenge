const mongoose = require('mongoose');

const Schema = require('../schema/Feedback');

const FeedbackModel = new mongoose.model('Feedback', Schema);

module.exports = FeedbackModel;