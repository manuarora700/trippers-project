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

exports.getTour = (req, res) => {
  res.status(200).render('tour', {
    title: 'The Forest Hiker Tour'
  });
};
