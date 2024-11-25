const { body, validationResult } = require('express-validator');

// Validation rules for task creation
const validateTask = [

  // Validate the title field
  body('Title')
    .notEmpty()
    .withMessage('Title is required')
    .isString()
    .withMessage('Title must be a string'),

  // Middleware function to handle validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();  // If no errors, continue to the next middleware/controller
    console.log(next);
  }
];

module.exports = validateTask;
