import { Router } from 'express';

export const router = Router();

// Get all tags
router.get('/tags');

// Get one tag
router.get('/tags/:id');

// Create a tag
router.post('/tags');

// Update a tag
router.patch('/tags/:id');

// Delete a tag
router.delete('/tags/:id');
