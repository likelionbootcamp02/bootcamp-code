const status = require("http-status");
const Product = require("../models/Product");

module.exports = {
  getAllProducts: async (req, res) => {
    const products = await Product.find(req.query);
    res.status(status.OK).json({ products: products });
  },

  addProduct: async (req, res) => {
    const newProduct = await Product.create(req.body);
    res.status(status.CREATED).json({ product: newProduct });
  },
  getProductById: async (req, res) => {
    const product = await Product.findById(req.params.productId);

    res.status(status.OK).json({ product: product });
  },
  updateProductById: async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.productId,
      req.body,
      { new: true }
    );

    res.status(status.OK).json({ product: updatedProduct });
  },
  deleteProductById: async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(
      req.params.productId
    );

    res.status(status.OK).json({ product: deletedProduct });
  },
};
