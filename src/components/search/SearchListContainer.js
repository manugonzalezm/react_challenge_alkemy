import React, { useEffect } from 'react';
import SearchList from './SearchList';
import {useHeroesContext} from '../../context/HeroesContext';
import { useParams, useHistory } from 'react-router-dom'
import Axios from 'axios';
import https from 'https';

/* Contenedor de la lista de superhéroes buscados.
Aquí ejecutamos la petición a la API para obtener una breve descripción de 
los superhéroes que coincidan con la búsqueda. */
export default function SearchListContainer() {
    const { addHero, search, setSearch } = useHeroesContext();
    const {name} = useParams();
    let history = useHistory();

    useEffect(()=> {
        const httpsAgent = new https.Agent({ keepAlive: true });
        Axios.get(`https://www.superheroapi.com/api.php/10219509750322612/search/${name}`, { httpsAgent })
            .then((response) => {
                if(response.data.response==="success"){
                    setSearch(response.data.results)
                } else {
                    setSearch(response.data.response)
                }
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
                history.push('/');
            });
    }, [name, history, setSearch])

    return (
        <div id="heroListContainer">
            <h5 id="titleSearchContainer">Sumá nuevos miembros</h5>
            {
                search !== "error" ?
                < SearchList
                search={search}
                addHero={addHero}
                />
                :
                <p id="notFound">No se encontraron resultados 🤷‍♂️</p>
            }
        </div>
    )
}
