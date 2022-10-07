const express = require("express");
const productController = require("../controllers/product.controller");
const router = express.Router();

// GET: /products
router.get("/", productController.getAllProducts);

// POST: /products
router.post("/", productController.addProduct);

// GET: /products/:productId
router.get("/:productId", productController.getProductById);

// PUT: /products/:productId
router.put("/:productId", productController.updateProductById);

// DELETE: /products/:productId
router.delete("/:productId", productController.removeProductById);

module.exports = router;
