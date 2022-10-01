const axios = require ('axios');
const express = require('express');
const app = express();
const port = 3001;

app.get('/', async (req, res) => {
    //res.send('Hello World!');
    const result = await axios.get('https://data.primariatm.ro/api/3/action/datastore_search?resource_id=d0134630-84d9-40b8-9bcb-dfdc926d66ab&limit=5');
    res.send(JSON.stringify(result.data.result.records));
})
  
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})

