const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');
const path =require('path');


//configure cors
app.use(cors({
    origin: 'http://localhost:5173', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
    credentials: true
}));

const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

//configure dotenv
dotenv.config({ path: './config/config.env' });

// Increase the payload limit to 10MB (adjust as needed)
app.use(express.json());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//connecting TO MONGODB
mongoose.connect(process.env.MONGO_DB_LOCAL_URL).then((res) => {
    console.log('Connected to MongoDB');


}).catch((err) => {
    console.log('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process if connection fails 
});

 //configure the router
 app.use('/api', require('./routes/apiRouter'));   

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
} );