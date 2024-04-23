module.exports = (sequelize, Sequelize) => {
    const CelestialBody = sequelize.define("celestial_body", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        type: {
            type: Sequelize.STRING
        },
        mass: {
            type: Sequelize.DOUBLE
        },
        radius: {
            type: Sequelize.DOUBLE
        },
        orbitalDistance: {
            type: Sequelize.DOUBLE
        },
        description: {
            type: Sequelize.TEXT
        }
    });

    return CelestialBody;
};
