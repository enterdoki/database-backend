const express = require('express');
const bodyParser = require('body-parser');
const borough = express.Router();
const db = require('../database');

borough.use(bodyParser.json());

borough.get('/', async (req, res, next) => {
    try {
        const data = await db.query(`SELECT * FROM airbnbs`);
        if (data) {
            res.status(200).json(data[0]);
        }
    } catch (err) {
        res.status(400).send(err);
    }
})

borough.get('/:borough', async (req, res, next) => {
    try {
        const data = await db.query(`SELECT * FROM airbnbs WHERE borough = "${req.params.borough}"`);
        if (data) {
            res.status(200).json(data[0]);
        }
    } catch (err) {
        res.status(400).send(err);
    }
})

module.exports = borough;