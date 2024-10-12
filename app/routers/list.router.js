import { Router } from 'express';
import cw from '../middlewares/controller.wrapper.js';

export const router = Router();

// Get all lists
router.get('/lists',cw((req, res) => {
  res.send('Get all lists');
}));

// Get one list
router.get('/lists/:id(\\d+)', cw());

// Create a list
router.post('/lists', cw());

// Update a list
router.patch('/lists/:id(\\d+)', cw());

// Delete a list
router.delete('/lists/:id(\\d+)', cw());
