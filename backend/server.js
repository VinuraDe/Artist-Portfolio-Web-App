// artist-portfolio-backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;


app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb+srv://vinura:vinura123@cluster0.cbgn3jc.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB Connected'); 
});

connection.on('error', (err) => {
  console.error('MongoDB Connection Error: ' + err.message);
});

const eventsRouter = require('./routes/events');
app.use('/events', eventsRouter);

app.listen(port, () => {
  console.log(`Server running ------> port: ${port}`);
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

