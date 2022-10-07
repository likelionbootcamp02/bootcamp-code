const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  rating: Number,
  category: String,
  thumbnail: String,
  soldOut: Boolean,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
