const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.json({ products: products });
};

const addProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json({ product: product });
};

const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.productId);
  res.json({ product: product });
};

const updateProductById = async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    { new: true }
  );
  res.json({ product: product });
};

const removeProductById = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.productId);
  res.json({ product: product });
};

module.exports = {
  getAllProducts,
  addProduct,
  getProductById,
  updateProductById,
  removeProductById,
};
