const status = require("http-status");

module.exports = {
  getAllProducts: (req, res) => {
    res.status(status.OK).json({ message: "Get all products" });
  },
};
