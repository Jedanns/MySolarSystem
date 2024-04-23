const db = require("../models");
const CelestialBody = db.celestialBodies;

// Créer et sauvegarder un nouveau corps céleste
exports.create = (req, res) => {
    // Valider la requête
    if (!req.body.name) {
        res.status(400).send({
            message: "Le contenu ne peut pas être vide !"
        });
        return;
    }

    // Créer un corps céleste
    const celestialBody = {
        name: req.body.name,
        type: req.body.type,
        mass: req.body.mass,
        radius: req.body.radius,
        orbitalDistance: req.body.orbitalDistance,
        description: req.body.description
    };

    // Sauvegarder dans la base de données
    CelestialBody.create(celestialBody)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Une erreur est survenue lors de la création du corps céleste."
            });
        });
};

// Récupérer tous les corps célestes
exports.findAll = (req, res) => {
    CelestialBody.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Une erreur est survenue lors de la récupération des corps célestes."
            });
        });
};

// Récupérer un seul corps céleste par id
exports.findOne = (req, res) => {
    const id = req.params.id;

    CelestialBody.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Impossible de trouver le corps céleste avec l'id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Erreur lors de la récupération du corps céleste avec l'id=" + id
            });
        });
};

// Mettre à jour un corps céleste
exports.update = (req, res) => {
    const id = req.params.id;

    CelestialBody.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Le corps céleste a été mis à jour avec succès."
                });
            } else {
                res.send({
                    message: `Impossible de mettre à jour le corps céleste avec l'id=${id}. Peut-être que le corps céleste n'a pas été trouvé ou que req.body est vide !`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Erreur lors de la mise à jour du corps céleste avec l'id=" + id
            });
        });
};

// Supprimer un corps céleste
exports.delete = (req, res) => {
    const id = req.params.id;

    CelestialBody.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Le corps céleste a été supprimé avec succès."
                });
            } else {
                res.send({
                    message: `Impossible de supprimer le corps céleste avec l'id=${id}. Peut-être que le corps céleste n'a pas été trouvé.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Impossible de supprimer le corps céleste avec l'id=" + id
            });
        });
};
