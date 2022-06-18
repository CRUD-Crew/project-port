const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient } = require('mongodb');

require('dotenv').config();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.json({
        'message': 'you have reached the base endpoint.'
    });
})

app.listen(PORT, console.log(`The server is running on PORT ${PORT}, you better go catch it!`))