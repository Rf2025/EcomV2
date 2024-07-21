const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 8200;


// create connection to dd
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect((err) => {
    if (err) {
        console.error('Error connectting to database', err);
    } else {
        console.log('Connected to database');
    }
});


// this route gets the products from the database, we also use this route to fetch products from the front end
app.get('/product/items', (req, res) => {
    connection.query('SELECT product_name, product_description, product_image, product_price,setup_type FROM products', (err, results) => {
        if (err) {
            console.error('Error fetching products', err);
            res.status(500).json({  'Failed to fetch products':err});
        } else {
            console.log('PRODUCTS::', results);
            res.json(results);
        }
    });
});





// this route is used to add user information from our form to the database
app.post('/form', (req, res) => {
    const data = req.body;
    console.log('User data::', data);
    res.send('received user data');
});


// tells express to server our static builds folder
app.use(express.static('build'));




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});





