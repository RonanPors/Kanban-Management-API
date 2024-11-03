import pg from 'pg';
import 'dotenv/config';

const { Pool } = pg;
let count = 0;

// Settings connection to the database
const config = {
  user: process.env.PG_USER,
  host: process.env.PG_HOST || 'localhost',
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT ? parseInt(process.env.PG_PORT, 10) : 5432,
  max: 20,
  idleTimeoutMillis: 30000,
};

const client = new Pool(config);

client.connect();

// Global client event handlers

client.on('connect', () => {
  count++;
  console.log(`🔌 Connection established 🔌 | Active connections: ${count}`);
});

client.on('remove', () => {
  count--;
  console.log(`📴 Connection closed 📴 | Active connections: ${count}`);
});

client.on('error', (err) => {
  console.error('❌ Unexpected error on idle client ❌', err);
  process.exit(-1);
});

// Exporting the client for use in other modules
export default client;
