import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CelestialBody() {
    const [body, setBody] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/api/celestialBodies/${id}`)
            .then(response => {
                setBody(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    if (!body) return <div>Loading...</div>;

    return (
        <div>
            <h1>{body.name}</h1>
            <p>Type: {body.type}</p>
            <p>Masse: {body.mass}</p>
            <p>Rayon: {body.radius}</p>
            <p>Distance orbitale: {body.orbitalDistance}</p>
            <p>Description: {body.description}</p>
        </div>
    );
}

export default CelestialBody;
