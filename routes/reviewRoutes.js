const express = require('express');
const reviewController = require('./../controllers/reviewController');

const router = express.Router();

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(reviewController.createReview);

module.exports = router;
