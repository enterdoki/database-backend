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
        allowNull: false,
    },
    complaint_type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING
    }
},{
    timestamps:false
})

module.exports = Complaint;