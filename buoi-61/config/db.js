const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://huynguyen:1111@cluster0.zkoekeb.mongodb.net/ecommerce?retryWrites=true&w=majority"
    );
    console.log("Database connected!!!");
  } catch (error) {
    console.log(error);
  }
}

// ES5
module.exports = { connectDB };
