// We will need our mongoose library
const mongoose = require(`mongoose`);

// Our schema
const ArcadeGameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  genre: {
    type: String,
    enum: ['fighting', 'sports', 'strategy', 'puzzle', 'arcade', 'platformer', 'other'],
    required: false
  }
}, {
  timestamps: true
});

// Exporting our resource model
module.exports = mongoose.model('Resource', ArcadeGameSchema);