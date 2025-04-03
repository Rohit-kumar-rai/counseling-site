const express = require('express');
const router = express.Router();
const { createBooking, getBookings, updateBooking } = require('../controllers/bookingController');

// Routes
router.route('/')
  .post(createBooking)
  .get(getBookings);

router.route('/:id')
  .put(updateBooking);

module.exports = router; 