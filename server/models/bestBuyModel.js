const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  category: { type: String, required: true },
  name: { type: String, required: true, unique: true },
  condition: { type: String, required: true },
  addToCartUrl: { type: String, required: true },
  image: { type: String, required: true },
  regularPrice: { type: Number, required: true },
  salePrice: { type: Number, required: true },
  shortDescription: { type: String },
  url: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Item', itemSchema);
