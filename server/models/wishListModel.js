const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Item = require('../models/bestBuyModel');

const wishListItemSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: 'item',
    required: true,
  },
  category: { type: String, required: true },
  name: { type: String, required: true },
  condition: { type: String, required: true },
  addToCartUrl: { type: String, required: true },
  image: { type: String, required: true },
  regularPrice: { type: Number, required: true },
  salePrice: { type: Number, required: true },
  shortDescription: { type: String },
  url: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('WishListItem', wishListItemSchema);
