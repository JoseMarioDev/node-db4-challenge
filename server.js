const express = require('express');
const helmet = require('helmet');

const db = require('./data/db-config.js');
const recipeRouter = require('./recipes/recipes-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/recipes', recipeRouter);

module.exports = server;
