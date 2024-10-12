import express from 'express';
import router from './routers/index.router.js';
import { limiter } from './middlewares/rate.limiting.js';
import docMiddleware from './middlewares/swagger.doc.mw.js';

const app = express();

// Utilisation du rate limiter
app.use(limiter);

// Analyse les requête entrantes avec JSON
app.use(express.json());

// Analyse les requête entrantes avec urlencoded
app.use(express.urlencoded({ extended: true }));

// Middleware pour utilisation de la JSdoc swagger
docMiddleware(app);

// Utilisation du router
app.use(router);


export default app;
