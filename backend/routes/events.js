// artist-portfolio-backend/routes/events.js
const express = require('express');
const router = express.Router();
const Event = require('../models/event');

// List all events
router.route('/').get((req, res) => {
  Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(500).json('Error: ' + err));
});

// Retrieve a specific event by ID
router.route('/:id').get((req, res) => {
  Event.findById(req.params.id)
    .then(event => {
      if (!event) {
        return res.status(404).json('Event not found');
      }
      res.json(event);
    })
    .catch(err => res.status(500).json('Error: ' + err));
});

// Create a new event
router.route('/').post((req, res) => {
  const { name, date, time, location, description } = req.body;
  const newEvent = new Event({ name, date, time, location, description });

  newEvent
    .save()
    .then(() => res.json('Event added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update an existing event
router.route('/:id').put((req, res) => {
  Event.findByIdAndUpdate(req.params.id, req.body)
    .then(event => {
      if (!event) {
        return res.status(404).json('Event not found');
      }
      res.json('Event updated!');
    })
    .catch(err => res.status(500).json('Error: ' + err));
});

// Delete an event by ID
router.route('/:id').delete((req, res) => {
  Event.findByIdAndRemove(req.params.id)
    .then(event => {
      if (!event) {
        return res.status(404).json('Event not found');
      }
      res.json('Event deleted!');
    })
    .catch(err => res.status(500).json('Error: ' + err));
});

module.exports = router;
