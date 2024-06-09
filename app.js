const express = require('express');
const http = require('http').Server(express());
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://prasadslaxmi03:xRYswn1Z3b9vrTB9@laxmi.rmldo6k.mongodb.net/?retryWrites=true&w=majority&appName=Laxmi");

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('MongoDB connected');
});

// Middleware
app.use(express.json());

// Define Routes
const userRoutes = require('./routes/user');
const userLocationRoutes = require('./routes/userLocation');
app.use('/api/users', userRoutes);
app.use('/api/user-locations', userLocationRoutes);
// Use other route paths as needed

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Start the socket server (if needed)
const socketServer = http.listen(3000, () => {
  console.log('Socket server running on port 3000');
});
