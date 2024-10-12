import express from 'express';
import router from './routers/index.router.js';

const app = express();

// Analyse les requête entrantes avec JSON
app.use(express.json());

// Analyse les requête entrantes avec urlencoded
app.use(express.urlencoded({ extended: true }));

// Utilisation du router
app.use(router);


export default app;
