const Sequelize = require('sequelize');
const db = require('../db');

const Complaint = db.define('complaint', {
    unique_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    created_date: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    closed_date: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    complaint_type: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: true
    },
    latitude: {
        type: Sequelize.FLOAT,
        allowNull: true,
    },
    longitude: {
        type: Sequelize.FLOAT,
        allowNull: true,
    }
},{
    timestamps:false
})

module.exports = Complaint;