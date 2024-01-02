const { body, validationResult } = require('express-validator');

// Validation middleware for note creation
const validateNoteCreation = [
  body('title').notEmpty().withMessage('Title is required').isLength({ max: 255 }).withMessage('Title must be less than 255 characters'),
  body('content').notEmpty().withMessage('Content is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Validation middleware for note updating
const validateNoteUpdating = [
  body('title').optional().isLength({ max: 255 }).withMessage('Title must be less than 255 characters'),
  body('content').optional(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateNoteCreation, validateNoteUpdating };
