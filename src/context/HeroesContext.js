import React, { createContext, useContext, useState, useEffect } from 'react';

export const context = createContext([]);
export const useHeroesContext = () => useContext(context);

const heroesFromLS = JSON.parse(localStorage.getItem('heroes'))
const goodFromLS = JSON.parse(localStorage.getItem('good'))
const evilFromLS = JSON.parse(localStorage.getItem('evil'))

const ContextProvider = ( {children} ) => {
    const initialStates = [
        heroesFromLS !== ([] || null) ? heroesFromLS : [],
        goodFromLS !== (0 || null) ? goodFromLS : 0,
        evilFromLS !== (0 || null) ? evilFromLS : 0,
    ]
    const [heroes, setHeroes] = useState(initialStates[0]);
    const [good, setGood] = useState(initialStates[1]);
    const [evil, setEvil] =useState(initialStates[2]);
    
    useEffect(() => {
        localStorage.setItem('heroes', JSON.stringify(heroes))
    }, [heroes])

    const addHero = (hero) => {
        if(heroes.length < 6) {
            if(hero.biography.alignment === "good" && good<3){
                setHeroes([...heroes, hero])
                setGood+=1;
            } else if(hero.biography.alignment === "evil" && evil<3){
                setHeroes([...heroes, hero])
                setEvil+=1;
            }
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