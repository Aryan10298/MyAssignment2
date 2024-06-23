const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const app = express();
const PORT = 8080;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://Aryan77:Asdfghjkl7708@marketcluster.ueuy5fx.mongodb.net/?retryWrites=true&w=majority&appName=MarketCluster', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.log('Failed to connect to MongoDB', err);
});

app.use('/api', productRoutes);

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Online Market Application.' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
