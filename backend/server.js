// // server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const authRoutes = require('./routes/auth');
// const productRoutes = require('./routes/productRoutes'); // ✅ ADD this line
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use('/api/auth', authRoutes);
// app.use('/api/products', productRoutes); // ✅ ADD this line

// app.get('/', (req, res) => {
//   res.send('API running...');
// });

// const PORT = process.env.PORT || 5000;
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     app.listen(PORT, () => console.log(`✅ Server started on port ${PORT}`));
//   })
//   .catch(err => console.log('❌ DB error:', err));

// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('API running...');
});

const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`✅ Server started on port ${PORT}`));
  })
  .catch(err => console.error('❌ DB error:', err));
