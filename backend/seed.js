// seed.js
import mongoose from 'mongoose';
import Product from './models/Product.js';
import bagsData from '../frontend/src/data/bags.js'; // path to your JS array

mongoose.connect("mongodb://localhost:27017/aliyana").then(async () => {
  await Product.deleteMany();
  await Product.insertMany(bagsData);
  console.log('✅ Seeded');
  process.exit();
});
