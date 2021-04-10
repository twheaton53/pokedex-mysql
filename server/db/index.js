const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pokedex'
});

db.connect((err, res) => {
  if (err) {
    console.log('Error connecting to database: ', err);
  } else {
    console.log('Successful connection to databse!');
  }
});

module.exports = db;