const express = require('express');
const helmet = require('helmet');

const Recipes = require('./recipe-model.js');

const server = express();
server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    Recipes.get()
        .then(result => res.status(200).json({ data: result }))
});



module.exports = server;