import React, {useState} from 'react';
import HeroList from './HeroList';
import { useHeroesContext } from '../../context/HeroesContext';
import { Container } from 'react-bootstrap';

//Contenedor de la lista de personajes que conforman el equipo. 
//Aquí ejecuto la petición a la API para obtener la información de los superhéroes.
export default function HeroListContainer() {
    const { heroes, deleteHero } = useHeroesContext();

    return (
        <Container id="heroListContainer">
            < HeroList
                heroes={heroes}
                deleteHero={deleteHero}
            />
        </Container>
    )
}
