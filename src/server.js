require('dotenv').config();
const express = require('express');
const app = require('./app');

const PORT = process.env.SERVER_PORT || 3000;
const server = express();

server.use(express.json());
server.use(app);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

