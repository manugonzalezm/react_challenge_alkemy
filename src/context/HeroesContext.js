import React, { createContext, useContext, useState, useEffect } from 'react';

export const context = createContext([]);
export const useHeroesContext = () => useContext(context);

const heroesFromLS = JSON.parse(localStorage.getItem('heroes'))

const ContextProvider = ( {children} ) => {
    const initialState = heroesFromLS !== ([] || null) ? heroesFromLS : [];
    const [heroes, setHeroes] = useState(initialState);
    
    useEffect(() => {
        localStorage.setItem('heroes', JSON.stringify(heroes))
    }, [heroes])

    const addHero = (hero) => {
        if(heroes.length < 6) {
            setHeroes([...heroes, hero])
        } else {
            console.log("Se ha alcanzado el máximo de 6 integrantes.")
        }
    }

    const deleteHero = (hero) => {
        if(heroes.length > 0) {
            setHeroes(heroes.filter(item => item !== hero));
        }
    }

    return(
        <context.Provider value={{ heroes, setHeroes, addHero, deleteHero }}>
            { children }
        </context.Provider>
    )
}

export default ContextProvider;