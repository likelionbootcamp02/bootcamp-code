// ES5
const express = require("express");
const mongoose = require("mongoose");
const status = require("http-status");

// Import routers
const productRouter = require("./routes/product.route");

// Variables
const PORT = 3000;
const DB_URI =
  "mongodb+srv://huynguyen:1111@cluster0.zkoekeb.mongodb.net/shopping?retryWrites=true&w=majority";

// Create a server instance
const app = express();

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
  .connect(DB_URI)
  .then(() => {
    console.log("Database connected!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
