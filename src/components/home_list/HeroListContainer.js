import React from 'react';
import HeroList from './HeroList';

//Contenedor de la lista de personajes que conforman el equipo. 
//Aquí ejecuto la petición a la API para obtener la información de los superhéroes.
export default function HeroListContainer() {
    return (
        <div>
            < HeroList />
        </div>
    )
}
