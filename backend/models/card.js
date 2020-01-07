const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
  name: { type: String, requred: true },
  mainFeatures: { type: String, requred: true },
  rating: { type: String, requred: true },
  reviews: { type: String, requred: true },
  imagePath: { type: String, requred: true }
});

module.exports = mongoose.model('Card', cardSchema);
