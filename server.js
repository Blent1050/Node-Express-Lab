const express = require('express');

const postsRouter = require('./posts/posts-router.js');

const server = express();

server.use(express.json());

server.use('/api/posts', postsRouter);

server.get('/', async (req, res) => {
  res.send(`
        <h2>Node-Express Labs</h2>
        <p>Check out some cool posts!</p>
    `);
});

module.exports = server;
