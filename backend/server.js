const express = require('express')
const dotenv = require('dotenv')
const mysql = require('mysql2')
const bodyParser = require('body-parser')

dotenv.config(); 


const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

db.connect((err) => {
    if(err){
        console.log('Error connecting to the database:', err);
        return
    }
    console.log('Connected to the MySQL database.')
})


app.get('/', (req, res) => {
    res.send('Welcome to the College Notice Board!');
  });


  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

  
