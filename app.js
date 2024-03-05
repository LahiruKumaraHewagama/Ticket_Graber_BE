const express = require('express')
const app = express()
const firebase = require('./services/firebase.js')
const config = require('./config'); // 
const cors = require('cors'); // Import the cors middlewar
const bodyParser = require('body-parser');

const PORT = config.port || 8000; // Using the port from config or defaulting to 8000

// Enable CORS for all routes
app.use(cors({
    origin: config.client_url, // Allow requests from your React application's origin
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
  }));

// Initialize Firebase before starting the server
firebase.init();

// Import userRoutes
const userRoutes = require('./routes/user');

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Use userRoutes middleware
app.use('/user', userRoutes);


app.listen(PORT, function () {
  console.log('App listening on port ',PORT)
})
