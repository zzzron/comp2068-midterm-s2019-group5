// Our dotenv
require('dotenv').config();

// Connecting to MongoDB cluster with Mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, {
  auth: {
    user: process.env.USERNAME,
    password: process.env.PASSWORD
  },
  useNewUrlParser: true
}).catch(err => console.error(`ERROR: ${err}`));

// Our imported libraries
const express = require('express');

// Assigning Express to an app contstant
const app = express();

// Adding cookie and session support to our application
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
app.use(cookieParser());
app.use(session({
  secret: (process.env.secret || 'boorakacha'),
  cookie: {
    maxAge: 10800000
  },
  resave: true,
  saveUninitialized: true
}));
app.use(flash());
app.use((req, res, next) => {
  debugger
  res.locals.flash = res.locals.flash || {};
  res.locals.flash.success = req.flash('success') || null;
  res.locals.flash.error = req.flash('error') || null;

  next();
});

// This maintains our home path
const path = require('path');

// Body parser which will make reading request bodies MUCH easier
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Our Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/css', express.static('assets/stylesheets'));
app.use('/js', express.static('assets/javascripts'));
app.use('/images', express.static('assets/images'));

// Our routes
const routes = require('./routes.js');
app.use('/', routes);

// Starting our server on port 4000
app.listen((process.env.PORT || 4000), () => console.log('Listening on 4000'));