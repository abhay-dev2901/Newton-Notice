const express = require('express')
const dotenv = require('dotenv')
const db = require('./config/db')
const adminRoutes = require('./routes/adminRoutes')
const studentRoutes = require('./routes/studentRoutes')
const instructorRoutes = require('./routes/instructorRoutes')
const cors = require('cors')

const bodyParser = require('body-parser')



dotenv.config(); 

const app = express();
const port = process.env.PORT || 3001;

app.use(cors())

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the College Notice Board!');
  });

app.use('/student' ,studentRoutes);
app.use('/instructor', instructorRoutes);
app.use('/admin', adminRoutes)


  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });