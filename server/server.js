// required dependencies
const express = require('express');
const path = require('path');
const router = require('./router/router.js');

// express app
const app = express();

// port
const PORT = 3000;

// use
app.use(express.json()); // parse JSON req body
app.use(express.urlencoded({ extended: true })); // parse URL-encoded req body
app.use(express.static(path.join(__dirname, './client'))); // static file in client dir
app.use('/api',router); // API routes

//catch all
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

// default error
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

// export app
module.exports = app;