// validationMiddleware.js

const validateRegisterInput = (req, res, next) => {
  const errors = {};
  const data = req.body;

  // Name validation
  if (!data.name || data.name.trim() === '') {
    errors.name = 'Name is required';
  } else if (data.name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || data.email.trim() === '') {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(data.email)) {
    errors.email = 'Email is invalid';
  }

  // Password validation
  if (!data.password) {
    errors.password = 'Password is required';
  } else if (data.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  // If there are errors, respond with 400 and errors object
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  // If valid, continue to next middleware or controller
  next();
};

module.exports = validateRegisterInput;
