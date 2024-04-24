import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CelestialBodyList() {
    const [bodies, setBodies] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/celestialBodies')
            .then(response => {
                // Assurez-vous que les données sont bien reçues
                console.log("Received data:", response.data);
                setBodies(response.data);
            })
            .catch(error => {
                // En cas d'erreur, elle sera affichée ici
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Liste des Corps Célestes</h1>
            {bodies.length > 0 ? (
                <ul>
                    {bodies.map(body => (
                        <li key={body.id}>
                            <Link to={`/bodies/${body.id}`}>
                                {body.name} - {body.type}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Aucun corps céleste trouvé.</p>
            )}
        </div>
    );
}

export default CelestialBodyList;
