import React, { useState, useEffect } from 'react';
import SearchList from './SearchList';
import {useHeroesContext} from '../../context/HeroesContext';
import { useParams } from 'react-router-dom'
import Axios from 'axios';

/* Contenedor de la lista de superhéroes buscados.
Aquí ejecutamos la petición a la API para obtener una breve descripción de 
los superhéroes que coincidan con la búsqueda. */
export default function SearchListContainer() {
    const { addHero, search, setSearch } = useHeroesContext();
    const {name} = useParams();

    useEffect(()=> {
        Axios({
            method: "get",
            url: `https://www.superheroapi.com/api.php/10219509750322612/search/${name}`,
        })
            .then((response) => {
                setSearch(response.data.results)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [name])

    return (
        <div id="heroListContainer">
            < SearchList
                search={search}
                addHero={addHero}
            />
        </div>
    )
}
