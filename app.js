require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connectDB=require('./db/connectDb')
app.get('/',(req,res)=>{
res.send("hi i am live");
});
const noteRoutes = require('./routes/noteRoutes');

app.use('/api/notes', noteRoutes);
const start = async () => {
  try {
    await connectDB(process.env.MONOGODB_URL);
    app.listen(port, () => {
      console.log(`yes i am conencted to ${port}`);
    });
  } catch (error) {
    console.log(`Error starting server: ${error.message}`);
  }
};
start();