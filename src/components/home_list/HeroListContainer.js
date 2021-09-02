import React from 'react';
import HeroList from './HeroList';
import PowerstatsTotal from './PowerstatsTotal'
import { useHeroesContext } from '../../context/HeroesContext';
import { Container } from 'react-bootstrap';

//Contenedor de la lista de personajes que conforman el equipo. 
//Aquí ejecuto la petición a la API para obtener la información de los superhéroes.
export default function HeroListContainer() {
    const { heroes, deleteHero, good, evil } = useHeroesContext();
    console.log(`Buenos:${good} y Malos:${evil}`)

    return (
        <Container id="heroListContainer">
            <h1>SuperTeam</h1><p id="subtitle"> Armá tu equipo de superhéroes y villanos</p>
            {heroes.length>0 ?
                <>
                    <PowerstatsTotal 
                    good={good}
                    evil={evil}
                    heroes={heroes}
                    />
                    < HeroList
                    heroes={heroes}
                    deleteHero={deleteHero}
                    />
                </>
                :
                <p id="emptyTeam">
                    El equipo esta vacío 😢 Usa el buscador del menú para agregar miembros 👆👆
                    <br/>
                    El límite es de 6 (3 buenos y 3 malos)
                </p>
            }
        </Container>
    )
}
