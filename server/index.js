const express = require('express');
const path = require('path');
const db = require('./db');
const queries = require('./db/queries.js');
const port = 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded( { extended: true } ));
app.use(express.static(path.join(__dirname + '/../client/dist')));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get('/api/pokedex', (req, res) => {
  queries.get(req, res);
});

app.get('/api/pokedex/types', (req, res) => {
  queries.getTypes(req, res);
});