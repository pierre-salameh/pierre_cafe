
// Import necessary dependencies
const express = require('express');
const mysql = require('mysql');
const app = express();

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'restuarant'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
    return;
  }
  console.log('Connected to MySQL!');
});

// Define EJS as the view engine
app.set('view engine', 'ejs');
//menu
// Define a route to fetch and render the menu data
app.get('/menu', (req, res) => {
  // Retrieve data from the menu table
  const query = 'SELECT item_name, item_ingredients, price, item_type,item_id FROM menu';
  
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving menu data: ', error);
      return res.sendStatus(500);
    }
    
    // Store the fetched menu items
    const menuItems = results;
    
    // Render the EJS template with menuItems data
    res.render('menu.ejs', { menuItems });
  });
});

//tables
// Define a route to fetch and render the tables data
app.get('/tables', (req, res) => {
  // Retrieve data from the tables table
  const query = 'SELECT table_num FROM tables';
  
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving menu data: ', error);
      return res.sendStatus(500);
    }
    
    // Store the fetched tables items
    const tables = results;
    
    // Render the EJS template with tables  data
    res.render('tables.ejs', { tables });
  });
});

//comblains
// Define a route to fetch and render the comblains data
app.get('/comblains', (req, res) => {
  // Retrieve data from the comblains table
  const query = 'SELECT message FROM comblains';
  
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving comblains data: ', error);
      return res.sendStatus(500);
    }
    
    // Store the fetched comblains items
    const comblains = results;
    
    // Render the EJS template with comblains data
    res.render('comblains.ejs', { comblains });
  });
});

app.listen(3000, () => {
  console.log('run');
});
  


app.use(express.static(__dirname+"public","css","stylee.css"))