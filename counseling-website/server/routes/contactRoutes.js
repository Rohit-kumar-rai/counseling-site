const express = require('express');
const router = express.Router();
const { submitContact, getContacts, updateContact } = require('../controllers/contactController');

// Routes
router.route('/')
  .post(submitContact)
  .get(getContacts);

router.route('/:id')
  .put(updateContact);

module.exports = router; 