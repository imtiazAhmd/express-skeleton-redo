import express from 'express';
import { renderHome } from '../controllers/indexController.js';
import { csrfValidate } from '../middleware/csrfMiddleware.js';

const router = express.Router();

router.get('/', renderHome);
router.post('/submit', csrfValidate, (req, res) => {
  // Handle form submission
  res.send('Form submitted successfully!');
});

export default router;
