import { Router } from 'express';

import { router as listRouter } from './list.router.js';
import { router as cardRouter } from './card.router.js';
import { router as tagRouter } from './tag.router.js';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.use(listRouter);
router.use(cardRouter);
router.use(tagRouter);

export default router;
