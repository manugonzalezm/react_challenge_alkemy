import React from 'react';
import HeroItem from '../HeroItem';

//Lista de los superhéroes del equipo. 
//Aquí obtenemos la información recibida de la API via props y la mapeamos con el componente "HeroItem".
export default function HeroList() {
    return (
        <div>
            < HeroItem />
        </div>
    )
}
