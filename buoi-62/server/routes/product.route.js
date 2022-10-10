// Import libraries
const express = require("express");
const productController = require("../controllers/product.controller");

// Create a router instance
const router = express.Router();

// Router url: /api/products

// Feature: Get all products
// Method: GET
// PATH: /
router.get("/", productController.getAllProducts);

module.exports = router;
