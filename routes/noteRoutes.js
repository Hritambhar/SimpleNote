// noteRoutes.js
const noteController= require('../controllers/noteController');
const{validateNoteCreation, validateNoteUpdating }= require('../middleware/noteValidation')
const express = require('express');
const basicAuth = require('basic-auth');
const router = express.Router();
// Basic Authentication Middleware
const authenticate = (req, res, next) => {
  const user = basicAuth(req);

  // Check if username and password are correct
  if (!user || user.name !== 'mitul' || user.pass !== 'pass1234') {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.status(401).send('Authentication required.');
  }

  // Authentication successful
  next();
};

// Apply authentication middleware to protected routes
router.use(authenticate);
const {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote
} = require('../controllers/noteController');

router.post('/create', validateNoteCreation,noteController.createNote);
router.get('/getAll', noteController.getAllNotes);
router.get('/:id', noteController.getNoteById);
router.put('/:id/update',validateNoteUpdating, noteController.updateNote);
router.delete('/:id/delete', noteController.deleteNote);

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: 'Internal Server Error' });
});

module.exports = router;
