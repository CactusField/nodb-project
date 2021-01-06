const express = require('express');
const ctrlstray = require('./controllers/ctrlstray');
const ctrlpark = require('./controllers/ctrlpark'); 
const { default: axios } = require('axios');
const app = express();
app.use(express.json());

//ctrlstray
app.use('/api/stray-dogs', ctrlstray.getstrayDog)
//ctrlstray

//ctrlpark
app.get('/api/bought-dogs', ctrlpark.getBoughtDogs);
app.post('/api/bought-dogs', ctrlpark.catchDogs);
//ctrlpark

const port = 4000;
app.listen(4000, ()=> console.log(`Server is running on ${port}`));
