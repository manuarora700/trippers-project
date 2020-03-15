const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Handling uncaught exceptions
process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION .. SHUTTTING DOWN');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful'));

//* SERVER
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

// Unhandled promise rejections -- handling
process.on('unhandledRejection', err => {
  console.log(err.name, err.message);
  console.log('Unhandled Rejection .. SHUTTTING DOWN');
  server.close(() => {
    process.exit(1);
  });
});
