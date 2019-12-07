const Sequelize = require('sequelize');
const db = require('../db');

const Services = db.define('service', {
    unique_key: {
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement: true,
    },
    created_date: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    agency: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    agency_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    complaint_type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descriptor: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    location_type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    incident_zip: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    incident_address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    street_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cross_street_one: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cross_street_two: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    landmark: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    borough: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    latitude: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    longitude: {
        type: Sequelize.FLOAT,
        allowNull: false,
    }
},{
    timestamps:false
})

module.exports = Services;