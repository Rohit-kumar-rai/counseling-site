const Booking = require('../models/Booking');

// @desc    Create a new booking
// @route   POST /api/booking
// @access  Public
exports.createBooking = async (req, res) => {
  try {
    const { name, email, phone, date, time, message } = req.body;
    
    // Create new booking
    const booking = await Booking.create({
      name,
      email,
      phone,
      date,
      time,
      message
    });
    
    // Send response
    res.status(201).json({
      success: true,
      message: 'Booking request received successfully',
      data: booking
    });
    
  } catch (error) {
    console.error('Error processing booking:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your booking request'
    });
  }
};

// @desc    Get all bookings
// @route   GET /api/booking
// @access  Private (would need auth middleware)
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings
    });
    
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Update booking status
// @route   PUT /api/booking/:id
// @access  Private (would need auth middleware)
exports.updateBooking = async (req, res) => {
  try {
    const { status } = req.body;
    
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: booking
    });
    
  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
}; 