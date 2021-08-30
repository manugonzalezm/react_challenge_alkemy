import React from 'react';
import SearchList from './SearchList';

/* Contenedor de la lista de superhéroes buscados.
Aquí ejecutamos la petición a la API para obtener una breve descripción de 
los superhéroes que coincidan con la búsqueda. */
export default function SearchListContainer() {
    return (
        <div>
            < SearchList />
        </div>
    )
}
