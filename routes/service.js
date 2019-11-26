const express = require('express');
const bodyParser = require('body-parser');
const service = express.Router();
const Services = require('../database/models/services');

service.use(bodyParser.json());

service.get('/', async (req, res, next) => {
    try {
        const data = await Services.findAll({
        });
        if (data) {
            res.status(200).json(data);
        }
    } catch (err) {
        res.status(400).send(err);
    }
})

service.get('/:borough', async(req, res, next) => {
    try {
        const data = await Services.findAll({
            where: {borough: req.params.borough}
        })
        if(data) {
            res.status(200).json(data);
        }
    } catch(err) {
        res.status(400).send(err);
    }
})

module.exports = service;