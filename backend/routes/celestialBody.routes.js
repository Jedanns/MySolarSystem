module.exports = app => {
    const celestialBodies = require("../controllers/celestialBody.controller.js");

    var router = require("express").Router();

    // Créer un nouveau corps céleste
    router.post("/", celestialBodies.create);

    // Récupérer tous les corps célestes
    router.get("/", celestialBodies.findAll);

    // Récupérer un seul corps céleste par id
    router.get("/:id", celestialBodies.findOne);

    // Mettre à jour un corps céleste
    router.put("/:id", celestialBodies.update);

    // Supprimer un corps céleste
    router.delete("/:id", celestialBodies.delete);

    app.use('/api/celestialBodies', router);
};
