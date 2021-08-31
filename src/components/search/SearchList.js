import React from 'react';
import HeroItem from './SearchItem';

/* En este componente mapearemos los héroes que hayan coincidido con la búsqueda.
Se recibe la información del componente padre via props. */
export default function SearchList() {
    return (
        <div>
            < HeroItem />
        </div>
    )
}
