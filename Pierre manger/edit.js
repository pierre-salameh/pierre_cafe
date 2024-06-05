const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'restuarant'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('connected to database');
});

app.set('view engine', 'ejs');


app.get('/edit/:item_name', (req, res) => {
  const { item_name } = req.params;
  const sql = `select * from menu where item_name = ?`;
  db.query(sql, [item_name], (err, result) => {
    if (err) throw err;
    res.render('edit', { item: result[0] });
  });
});

app.post('/edit/:item_name', (req, res) => {
  const { item_name } = req.params;
  const { price, item_ingredients, type } = req.body;
  const sql = `update menu set price = ?, item_ingredients = ?, type = ? where item_name = ?`;
  db.query(sql, [price, item_ingredients, type, item_name], (err, result) => {
    if (err) throw err;
    res.redirect('/');
  });
});

app.get('/', (req, res) => {
  const query = 'select item_name, item_ingredients, price from menu';
  db.query(query, (error, results) => {
    if (error) {
      console.error('error retrieving menu data: ', error);
      return res.sendStatus(500);
    }
    const menuitems = results;
    res.render('edit menu', { menuitems });
  });
});

db.end();

app.listen(3000, () => {
  console.log('server started on port 3000');
});