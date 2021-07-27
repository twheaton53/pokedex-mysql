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

// Get all pokemon
app.get('/api/pokedex', (req, res) => {
  queries.get(req, res);
});

// Get all types of pokemon
app.get('/api/pokedex/types', (req, res) => {
  queries.getTypes(req, res);
});

// Get a specific type
app.get('/api/pokedex/type/:type', (req, res) => {
  queries.getType(req.params.type, res);
});

// Get pokemon of a specific type
app.get('/api/pokedex/types/:type', (req, res) => {
  queries.getPokemonOfType(req.params.type, (err, data) => {
    if (err) {
      console.log('Error getting type: ', err);
    } else {
      res.send(data);
    }
  });
})

// Add a pokemon
app.post('/api/pokedex', (req, res) => {
  queries.postPokemon(req, res, (err, result) => {
    res.send(result);
  });
});