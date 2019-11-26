const express = require('express');
const bodyParser = require('body-parser');
const borough = express.Router();
const Airbnb = require('../database/models/airbnb');

borough.use(bodyParser.json());

borough.get('/', async (req, res, next) => {
    try {
        const data = await Airbnb.findAll({
        });
        if (data) {
            res.status(200).json(data);
        }
    } catch (err) {
        res.status(400).send(err);
    }
})

borough.get('/:borough', async (req, res, next) => {
    try {
        const data = await Airbnb.findAll({
            where: {
                borough: req.params.borough
            }
        });
        if (data) {
            res.status(200).json(data);
        }
    } catch (err) {
        res.status(400).send(err);
    }
})

module.exports = borough;