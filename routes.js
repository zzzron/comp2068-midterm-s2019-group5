// Our Express app module
const express = require('express');
const app = express();

// Importing the pageRoutes
const arcadeGamesRoutes = require('./routes/ArcadeGames');

// Register page routes
app.use('/arcadeGames', arcadeGamesRoutes);

// Our home page
// app.get('/', (req, res) => {
//   res.render('pages/home');
// });

// Exporting the changes
module.exports = app;