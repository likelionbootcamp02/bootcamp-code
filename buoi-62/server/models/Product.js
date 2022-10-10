const mongoose = require("mongoose");
const { Schema } = mongoose;

// Create Product Schema
const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 700,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    rating: {
      type: Number,
      default: 5,
      min: 1,
      max: 5,
    },
    colors: [String],
    sizes: [
      {
        type: String,
        uppercase: true,
      },
    ],
    thumbnail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
// Create Product model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
