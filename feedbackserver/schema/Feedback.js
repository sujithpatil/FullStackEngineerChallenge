const mongoose = require('mongoose');

const FeedbackSchema = mongoose.Schema({
    id: String,
    reviewerName: String,
    reviewId: String,
    reviewText: String
});

module.exports = FeedbackSchema;