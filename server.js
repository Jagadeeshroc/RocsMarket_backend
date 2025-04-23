const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//configure dotenv
dotenv.config({ path: './config/config.env' });

//configure express to receive json data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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