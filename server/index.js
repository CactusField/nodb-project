const express = require ('express');
const app = express();
app.use(express.json());

const port = 4000;
app.listen(4000, ()=> console.log(`Server is running on ${port}`));
