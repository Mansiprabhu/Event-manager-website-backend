const express = require('express');
const router = express.Router();
const Event = require('../models/event');

// POST new event
router.post('/', async (req, res) => {
    const { title, description, date } = req.body;
    const existingEvent = await Event.findOne({ date: date });

    if (existingEvent) {
        return res.status(400).send('Event already booked on this date');
    }

    const event = new Event({ title, description, date });

    try {
        await event.save();
        res.status(201).send(event);
    } catch (error) {
        res.status(500).send(error);
    }
});

// GET all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).send(events);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
