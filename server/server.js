const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const CORS = require('cors');
const PORT = 3000;

const MONGO_URI =
  //  'ENTER YOUR URI';

  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'bestbuy',
    })
    .then(() => console.log('Connected to Mongo DB.'))
    .catch((err) => console.log(err)); // FIX ERROR HANDLING

/**
 * require routers
 */
const apiRouter = require('./routes/api.js');
const wishListRouter = require('./routes/wishList.js');
const categoryRouter = require('./routes/category.js');

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * handle cross-origin-resource sharing between external domains
 */
app.use(CORS({ credentials: true, origin: 'http://localhost:8080' }));

/**
 * handle requests for static files
 */
app.use(express.static(path.resolve(__dirname, '../app')));

/**
 * define route handlers
 */
app.use('/api', apiRouter);
app.use('/wishlist', wishListRouter);
app.use('/category', categoryRouter);

// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => {
  return res.status(404).sendFile(path.resolve(__dirname, './app/404.html'));
});

// Global error handling middleware
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
