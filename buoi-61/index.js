const express = require("express");
const { connectDB } = require("./config/db");

// Routers
const productRouter = require("./routes/product.route");

// Create an server instance
const app = express();
const port = 3000;

// Connect database
connectDB();

// Parse Json
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.use("/api/products", productRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
