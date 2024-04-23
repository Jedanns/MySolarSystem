const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require("./routes/celestialBody.routes.js")(app);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Port de base pour le serveur
const PORT = process.env.PORT || 3000;

// Route de base pour tester que le serveur fonctionne
app.get('/', (req, res) => {
    res.json({ message: "Bienvenue dans l'API de gestion du système solaire." });
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Le serveur est en écoute sur le port ${PORT}.`);
});
