const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config.js');

// Créer un objet db pour conserver tous les modèles et la connexion
const db = {};

// Initialisation de la connexion Sequelize
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});


// Ajouter la connexion et Sequelize lui-même à l'objet db
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importer les modèles
db.celestialBodies = require('./celestialBody.model.js')(sequelize, Sequelize);

module.exports = db;
