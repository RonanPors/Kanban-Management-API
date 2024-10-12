import express from 'express';
import router from './routers/index.router.js';
import { limiter } from './middlewares/rate.limiting.js';

const app = express();

// Utilisation du rate limiter
app.use(limiter);

// Analyse les requête entrantes avec JSON
app.use(express.json());

// Analyse les requête entrantes avec urlencoded
app.use(express.urlencoded({ extended: true }));

// Utilisation du router
app.use(router);


export default app;
