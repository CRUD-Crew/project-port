const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT || 8000;

MongoClient.connect(process.env.DB_STRING, { useUnifiedTopology: true })
    .then(client => {
        console.log('connected to mongodb');
        
        app.use(express.static('public'));
        app.use(cors());

        const db = client.db('project-port');

        app.get('/', (req, res) => {
            res.json({
                'message': 'you have reached the base endpoint.'
            });
        })

        app.listen(PORT, console.log(`The server is running on PORT ${PORT}, you better go catch it!`))

    })
    .catch(err => console.error(err))