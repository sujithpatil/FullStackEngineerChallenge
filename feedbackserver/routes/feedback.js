const express = require('express');

const FeedbackRouter = express.Router();

const FeedbackModel = require('../models/FeedbackModel');

FeedbackRouter.post('', async ( req, res, next ) => {
    const feedbackBody = req.body;
    console.log( feedbackBody )
    const feedback = new FeedbackModel( feedbackBody );
    const savedResponse = await feedback.save();
    res.send( savedResponse );
})

FeedbackRouter.get('/:id', async ( req, res, next ) => {
    const id = req.params.id;
    const feedbacks = await FeedbackModel.find( {
        id
    } );
    res.send( feedbacks );
})

FeedbackRouter.put('/:reviewId', async ( req, res, next ) => {
    const reviewId = req.params.reviewId;
    const feedback = await FeedbackModel.findOne( {reviewId} );
    console.log( req.body );
    feedback["reviewText"] = req.body.reviewText;
    const updated = await feedback.save();
    res.send( updated );
})

module.exports = FeedbackRouter;