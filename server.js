const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT || 8000;

app.use(cors());

app.get('/', (req, res) => {
    res.json({
        'message': 'you have reached the base endpoint.'
    });
})

app.listen(PORT, console.log(`The server is running on PORT ${PORT}, you better go catch it!`))