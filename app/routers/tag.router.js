import { Router } from 'express';
import cw from '../middlewares/controller.wrapper.js';

export const router = Router();

// Get all tags
router.get('/tags', cw());

// Get one tag
router.get('/tags/:id', cw());

// Create a tag
router.post('/tags', cw());

// Update a tag
router.patch('/tags/:id', cw());

// Delete a tag
router.delete('/tags/:id', cw());
