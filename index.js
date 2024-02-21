// 

const express = require('express');
const mongoose = require('mongoose');
const wordRoutes = require('./routes/wordRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://Sumit4482:root@cluster0.75lpqhl.mongodb.net/TeleguWords?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
});

// Middleware
app.use(express.json());

// Routes
app.use('/api', wordRoutes);
app.use(cors());

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
