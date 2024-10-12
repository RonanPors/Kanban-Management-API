import { Router } from 'express';

export const router = Router();

// Get all lists
router.get('/lists', (req, res) => {
  res.send('Get all lists');
});

// Get one list
router.get('/lists/:id(\\d+)');

// Create a list
router.post('/lists');

// Update a list
router.patch('/lists/:id(\\d+)');

// Delete a list
router.delete('/lists/:id(\\d+)');
