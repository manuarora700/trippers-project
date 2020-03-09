const app = require('./app');

//* SERVER
const port = 3000;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
