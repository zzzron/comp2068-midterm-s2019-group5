// Our Express app module
const express = require('express');
const app = express();

// Importing the pageRoutes
const arcadeGamesRoutes = require('./routes/ArcadeGames');

// Our home page
app.get('/', (req, res) => {
  res.render('pages/home');
});

// Exporting the changes
module.exports = app;