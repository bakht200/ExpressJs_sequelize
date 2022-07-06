const controller = require('../controller/reviewController.js');

const reviewRouter = require('express').Router();

reviewRouter.post('/addReviews',controller.addRating)

reviewRouter.get('/allReviews',controller.getAllRatings)

module.exports = reviewRouter;
