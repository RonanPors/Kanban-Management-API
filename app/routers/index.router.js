import { Router } from 'express';
import cw from '../middlewares/controller.wrapper.js';
import errorHandler from '../middlewares/error.handler.js';

import { router as listRouter } from './list.router.js';
import { router as cardRouter } from './card.router.js';
import { router as tagRouter } from './tag.router.js';
import ApiError from '../errors/api.error.js';

const router = Router();

router.get('/', cw((req, res) => {
  res.send('Hello World!');
}));

router.use(listRouter);
router.use(cardRouter);
router.use(tagRouter);

// gestion des erreurs routes inexistante
router.use((_, __, next) => {
  next(new ApiError('NOT_FOUND', 'Resource not found', { status: 404 }));
});

// handler de gestion des erreurs
router.use(errorHandler);

export default router;
