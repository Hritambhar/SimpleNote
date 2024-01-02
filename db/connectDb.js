const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = "mongodb+srv://mitul:0wRcKRtw0SaiHHqh@cluster0.wcacg5w.mongodb.net/Cluster0?retryWrites=true&w=majority";
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

module.exports = connectDB;
