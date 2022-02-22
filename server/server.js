const express = require('express');
const path = require('path');
const CSVToArray = require('./parser.js');

const app = express();
const PORT = 3000;
const fs = require('fs');

fs.readFile('../Inputs.csv', 'utf8' , (err, data) => { 
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
});

//we need the server to send the frontend piece - when the server loads, it sends the frontend a
//parsed array of the data we're sending over
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../Inputs.csv'));
  //response must include: content-type: text/html; charset=UTF-8 and a response code of 200
  // next(new Error);
});

/**
 * handle requests for static files
 * none needed here as we're pulling from a CSV file
 */

// route handler to respond with main app

/**
 * configire express global error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */

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
