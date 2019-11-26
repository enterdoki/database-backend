const Sequelize = require('sequelize');
const db = require('../db');

const Airbnb = db.define('airbnb', {
    last_review: {
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
    },
    neighbourhood: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    borough: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    number_of_reviews: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    room_type: {
        type: Sequelize.STRING,
        allowNull: false,
    }
},{
    timestamps:false
})

module.exports = Airbnb;