const db = require('./index.js');
const mysql = require('mysql');

module.exports = {

  get: (req, res) => {
    let qString = 'SELECT p.name, t.type, i.img FROM pokemon p INNER JOIN types t ON p.typeNum = t.id INNER JOIN images i ON p.imageNum = i.id WHERE p.typeNum = t.id AND p.imageNum = i.id;'

    db.query(qString, (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.send(data);
      }
    });
  },

  getTypes: (req, res) => {
    db.query(`SELECT * FROM types`, (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.send(data);
      }
    });
  },

  getType: (type, res) => {
    db.query(`Select id from types where type like ("${type}");`, (err, data) => {
      if (err) {
        res.status(404).end();
      } else {
        res.send(data);
      }
    });
  },

  getPokemonOfType: (type, callback) => {
    let qString = `SELECT p.name, t.type, i.img FROM pokemon p INNER JOIN types t ON p.typeNum = t.id INNER JOIN images i ON p.imageNum = i.id WHERE t.type LIKE "${type}" AND p.typeNum = t.id AND p.imageNum = i.id;`

    db.query(qString, (err, data) => {
      if (err) {
        callback (err, null);
      } else {
        callback (null, data);
      }
    });
  },

  postPokemon: (req, res, callback) => {
    let type = req.body.type;
    let name = req.body.name;
    let img = req.body.img
    let qString2 = `INSERT INTO images (img) VALUES ("${img}");`

      db.query(qString2, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          db.query(`INSERT INTO pokemon (name, typeNum, imageNum) VALUES ("${name}", "${type}", LAST_INSERT_ID());`, (err, result) => {
            if (err) {
              console.log(err)
            } else {
              res.send(result);
            }
          });
        }
      });

  }
}