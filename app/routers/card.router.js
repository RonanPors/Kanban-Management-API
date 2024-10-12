import { Router } from 'express';

export const router = Router();

// Get all cards
router.get('/cards');

// Get one card
router.get('/cards/:id');

// Create a card
router.post('/cards');

// Update a card
router.patch('/cards/:id');

// Delete a card
router.delete('/:id');
