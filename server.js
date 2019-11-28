require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./db');
const db = require('./db');
const PORT = process.env.PORT || 3001; 
const HOST = process.env.HOST || 'http://localhost3000'; 

const app = express();

app.use(express.static('app/public'));

const corsOptions = {
    origin: HOST,
    credentials: true, 
    optionsSuccessStatus: 200 
}

// CONTROLLERS 

app.use(cors(corsOptions));

// ROUTES 
app.get('/', (req, res) => {
  console.log("DATABASE INSTANCE:")
  console.log(db); 
  res.json({
    code: 200,
    status: 'good',
    success: true,
    data: "Request received"
  });
});

sequelize.sync({force: true})
    .then(()=>{
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    })
    .catch((err)=>{
        console.error(err);
    });