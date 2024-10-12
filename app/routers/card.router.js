import { Router } from 'express';
import cw from '../middlewares/controller.wrapper.js';

export const router = Router();

// Get all cards
router.get('/cards', cw());

// Get one card
router.get('/cards/:id', cw());

// Create a card
router.post('/cards', cw());

// Update a card
router.patch('/cards/:id', cw());

// Delete a card
router.delete('/:id', cw());
