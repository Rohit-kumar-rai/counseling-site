const Contact = require('../models/Contact');

// @desc    Submit a contact form
// @route   POST /api/contact
// @access  Public
exports.submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Create new contact submission
    const contact = await Contact.create({
      name,
      email,
      subject,
      message
    });
    
    // Send response
    res.status(201).json({
      success: true,
      message: 'Message received successfully',
      data: contact
    });
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your message'
    });
  }
};

// @desc    Get all contact submissions
// @route   GET /api/contact
// @access  Private (would need auth middleware)
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
    
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Mark contact as read
// @route   PUT /api/contact/:id
// @access  Private (would need auth middleware)
exports.updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact submission not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: contact
    });
    
  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
}; 