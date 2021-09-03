import React, { createContext, useContext, useState, useEffect } from 'react';

export const context = createContext([]);
export const useHeroesContext = () => useContext(context);

const heroesFromLS = JSON.parse(localStorage.getItem('heroes'))
const goodFromLS = JSON.parse(localStorage.getItem('good'))
const evilFromLS = JSON.parse(localStorage.getItem('evil'))

const ContextProvider = ( {children} ) => {
    const initialStates = [
        heroesFromLS !== null ? heroesFromLS : [],
        goodFromLS > (0 || null) ? goodFromLS : 0,
        evilFromLS > (0 || null) ? evilFromLS : 0,
    ]
    const [heroes, setHeroes] = useState(initialStates[0]);
    const [good, setGood] = useState(initialStates[1]);
    const [evil, setEvil] =useState(initialStates[2]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        localStorage.setItem('heroes', JSON.stringify(heroes))
        localStorage.setItem('good', JSON.stringify(good))
        localStorage.setItem('evil', JSON.stringify(evil))
    }, [heroes, good, evil])

    const addHero = (heroId) => {
        if(heroes.length < 6) {
            const actualHero = search.find(u => u.id === heroId)
            console.log(actualHero)
            //Tomo a los neutrales como buenos para evitar errores.
            if(actualHero.biography.alignment !== ("bad")){
                if(good===3){
                    alert("No puedes agregar más héroes buenos")
                } else if(good<3){
                    setHeroes([...heroes, actualHero])
                    setGood(good+1);
                }
            } else if(actualHero.biography.alignment === "bad"){
                if(evil===3){
                    alert("No puedes agregar más héroes malos")
                } else if(evil<3){
                    setHeroes([...heroes, actualHero])
                    setEvil(evil+1);
                }
            }
        } else {
            alert("No se puede realizar la acción. Se ha alcanzado el máximo de 6 integrantes.")
        }
    }

    const deleteHero = (heroId) => {
        if(heroes.length > 0) {
            const actualHero = heroes.find(f => f.id === heroId)
            console.log(actualHero.biography.alignment)
            if(actualHero.biography.alignment !== ("bad")){
                setGood(good-1);
            } else {
                setEvil(evil-1);
            }
            setHeroes(heroes.filter(item => item !== actualHero));
        }
    }

    return(
        <context.Provider value={{ heroes, setHeroes, addHero, deleteHero, search, setSearch, good, evil }}>
            { children }
        </context.Provider>
    )
}

export default ContextProvider;