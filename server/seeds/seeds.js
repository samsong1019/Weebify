 require('dotenv').config();
 const connectDB = require('../config/connection');
 const { User, Product } = require('../models');
 
 const usersData = require('./usersData.json');
 const productsData = require('./productsData.json');
 
 
 connectDB.once('open', async () => {
   // clean database
   await User.deleteMany({});
   await Product.deleteMany({});
  
   // bulk create each model
   const users = await User.insertMany(usersData);
   const products = await Product.insertMany(productsData);
  
 
 
 
   console.log('all done!');
   process.exit(0);
 });