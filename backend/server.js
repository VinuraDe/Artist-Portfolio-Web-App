// artist-portfolio-backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://vinura:vinura123@cluster0.1atyzrb.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Define API routes
const eventsRouter = require('./routes/events');
app.use('/events', eventsRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
