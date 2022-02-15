const express = require('express');
const path = require('path');
const CSVToArray = require('./parser.js');

const app = express();
const PORT = 3000;
app.use(express.static('/', )); //to serve all static files from /client/assets dir 
//when requests are made to /inputs.csv, parsing through each request to receive filtered csv data
//let's try and just console.log csv file first to get it to render

//serving static files from root
app.use(express.static('./inputs.csv')); //allows us to use assets images and stuff here in the server

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
  //response must include: content-type: text/html; charset=UTF-8 and a response code of 200
  // next(new Error);
});


/* handle parsing request body */


/**
 * handle requests for static files
 */


/**
 * define route handlers
 */

// route handler to respond with main app



/**
 * configire express global error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */

//error handling for asynchronous code
// app.get('/', function (req, res, next) {
//   fs.readFile('/file-does-not-exist', function (err, data) {
//     if (err) {
//       next(err) // Pass errors to Express.
//     } else {
//       res.send(data); //otherwise pass the data into server
//     }
//   });
// });
// http://localhost:3000/nothandlingthis


// catch-all route handler for any requests to an unknown route

// function errorHandler (err, req, res, next) {
//   res.status(500);
//   res.render('error', { error: err });
// }

app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404; //we should have a global var that points here if we encounter a global middleware error
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status);
  res.send({
    log : 'Express error handler caught unknown middleware error',
    status: err.status, //whatever the error was that it failed on
    message: {err: 'An error occured'},
  });
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
