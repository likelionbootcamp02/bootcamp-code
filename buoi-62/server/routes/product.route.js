// Import libraries
const express = require("express");
const productController = require("../controllers/product.controller");

// Create a router instance
const router = express.Router();

// Router url: /api/products
// /api/products?rating=5

// req.body
// req.params
// req.query
router
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.addProduct);

// Router url: /api/products/:productId
router
  .route("/:productId")
  .get(productController.getProductById)
  .put(productController.updateProductById)
  .delete(productController.deleteProductById);

module.exports = router;
