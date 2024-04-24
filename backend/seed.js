const db = require('./models');  // Assure-toi que le chemin d'accès est correct selon la structure de ton projet

const planets = [
    {
        name: 'Mercure',
        type: 'Planète',
        mass: 3.30e23,
        radius: 2439.7,
        orbitalDistance: 57.9e6,
        description: 'Mercure est la planète la plus proche du Soleil.'
    },
    {
        name: 'Vénus',
        type: 'Planète',
        mass: 4.87e24,
        radius: 6051.8,
        orbitalDistance: 108.2e6,
        description: 'Vénus est connue pour ses conditions extrêmes et son atmosphère dense.'
    },
    {
        name: 'Terre',
        type: 'Planète',
        mass: 5.97e24,
        radius: 6371,
        orbitalDistance: 149.6e6,
        description: 'La Terre est notre planète, riche en vie et diversité.'
    },
    {
        name: 'Mars',
        type: 'Planète',
        mass: 6.42e23,
        radius: 3389.5,
        orbitalDistance: 227.9e6,
        description: 'Mars, souvent appelée la planète rouge, est célèbre pour ses montagnes et ses plaines.'
    },
    {
        name: 'Jupiter',
        type: 'Planète',
        mass: 1.90e27,
        radius: 69911,
        orbitalDistance: 778.5e6,
        description: 'Jupiter est la plus grande planète de notre système solaire.'
    },
    {
        name: 'Saturne',
        type: 'Planète',
        mass: 5.68e26,
        radius: 58232,
        orbitalDistance: 1.43e9,
        description: 'Saturne est célèbre pour ses anneaux distinctifs.'
    },
    {
        name: 'Uranus',
        type: 'Planète',
        mass: 8.68e25,
        radius: 25362,
        orbitalDistance: 2.87e9,
        description: 'Uranus est unique en raison de son inclinaison axiale extrême.'
    },
    {
        name: 'Neptune',
        type: 'Planète',
        mass: 1.02e26,
        radius: 24622,
        orbitalDistance: 4.50e9,
        description: 'Neptune est connue pour son intense couleur bleue et ses vents forts.'
    }
];

const seedDatabase = async () => {
    try {
        await db.sequelize.sync({ force: true });  // Cette commande va réinitialiser la base de données
        for (const planet of planets) {
            await db.celestialBodies.create(planet);
        }
        console.log('Database seeded successfully!');
    } catch (error) {
        console.error('Failed to seed database:', error);
    }
};

seedDatabase();
