// ES5
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const status = require("http-status");

// Import routers
const productRouter = require("./routes/product.route");
const mongoConfig = require("./config/db");

// Variables
const PORT = 3000;

// Create a server instance
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// GET
// ROUTE: /
// RES: {message: "Hello World"}
app.get("/api", (req, res) => {
  res.status(status.OK).json({ message: "Hello World" });
});

// Routes
app.use("/api/products", productRouter);

// Run database & server
mongoose
  .connect(mongoConfig.uri)
  .then(() => {
    console.log("Database connected!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
