require('dotenv').config();
const connectDB = require('./db/connectDb');
const Note = require('./models/noteModel');
const ProductJson = require('./products.json')
const start = async () => {
    try {
      await connectDB(process.env.MONOGODB_URL);
      await Note.create(ProductJson);
      console.log("success");
    } catch (error) {
      console.log(`Error starting server: ${error.message}`);
    }
  };
  start();