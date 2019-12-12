const Sequelize = require('sequelize');
const db = require('../db');

const Report = db.define('report', {
    severity: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'empty'
    },
    latitude: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    longitude: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
    }
},{
    timestamps:false
})

module.exports = Report;