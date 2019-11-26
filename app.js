require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;
const app = express();
const db = require('./database/db');
const router = require('./routes/index');

app.use(cors());
app.use('/', router);

db.sync({
    force: false
},
    app.listen(port, () => {
        console.log(`Server listening on port: ${port}`);
    })
)
// app.get('/', (req, res, next) => {
//     res.status(200).send('Hello World!');
// })

