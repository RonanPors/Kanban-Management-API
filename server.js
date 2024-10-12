import 'dotenv/config';
import { createServer } from 'node:http';
import app from './app/index.app.js';

// Creation d'un serveur http avec node.js
const httpServer = createServer(app);

const PORT = process.env.PORT || 3000;

// Ecoute du serveur sur le port 3000 par défaut
httpServer.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`🚀 Server is running on http://localhost:${PORT}  🚀`);
  }
});
