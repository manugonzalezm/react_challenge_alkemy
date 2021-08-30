import React from 'react';
import HeroDetail from './HeroDetail';

// Contenedor del detalle de superhéroe.
/* Aquí ejecutamos la petición a la API obteniendo la información que se utilizará
en el componente anidado HeroDetail */
export default function HeroDetailContainer() {
    return (
        <div>
            < HeroDetail />
        </div>
    )
}
