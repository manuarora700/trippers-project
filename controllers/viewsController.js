const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res, next) => {
  //  1. Get all tour data from our backend API collection
  const tours = await Tour.find();
  // 2. Build template

  // 3. Render the template using the tour data from the collection
  res.status(200).render('overview', {
    title: 'All tours',
    tours
  });
});

exports.getTour = catchAsync(async (req, res) => {
  // 1. Get the data, for the requested tour (includes reviews and tour guides)
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user'
  });
  // 2. Build templates

  // 3. Render template using data from step 1.
  res.status(200).render('tour', {
    title: `${tour.name} Tour`,
    tour
  });
});
