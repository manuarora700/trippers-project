const fs = require('fs');
const express = require('express');

const app = express();

// Middleware
app.use(express.json());

// tours array from dev data folder -- called only once and not in the callback
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

// Get all tours
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours
    }
  });
});

// Get individual tour
app.get('/api/v1/tours/:id', (req, res) => {
  console.log(req.params);

  const id = req.params.id * 1; // convert id(string) to id(number) from req.params
  const tour = tours.find(el => el.id === id); // Finds id

  // Check for valid ID, Will change it once MongoDB is in action
  // if (id > tours.length) {
  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID'
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  });
});

//  Post a tour
app.post('/api/v1/tours', (req, res) => {
  // console.log(req.body);

  // mimicking db initially -- later will change
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    err => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour
        }
      });
    }
  );
});

// Server listen
const port = 3000;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
