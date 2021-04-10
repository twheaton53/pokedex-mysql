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
  }
}