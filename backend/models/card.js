const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
  name: { type: String, requred: true },
  mainFeatures: { type: String, requred: true },
  rating: { type: String, requred: true },
  reviews: { type: String, requred: true },
  price: { type: String, requred: true },
  location: { type: String, requred: true },
  address: { type: String, requred: true },
  telephone: { type: String, requred: true },
  openHours: { type: String, requred: true },
  parking: { type: String, requred: true },
  description: { type: String, requred: true },
  club: { type: String, requred: true },
  pub: { type: String, requred: true },
  restaurant: { type: String, requred: true },
  event: { type: String, requred: true },
  imagePath: { type: String, requred: true }
});

module.exports = mongoose.model('Card', cardSchema);
