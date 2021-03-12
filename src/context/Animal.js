import React, { createContext, useState, useContext } from 'react';


export const AnimalContext = createContext({});

export const AnimalProvider = (props) => {
    
    const [water, setWater] = useState({
        capacity: 500,
        currentValue: 500,
        decrementRate: 10,
        sleepRate: 0.6, 
        drinkRate: 30,
        variationRate: 0.2,
        lackRate: 0.5,  
        randomNumber: 0
    });

    const [animalState, setAnimalState] = useState({
        sleeping: false,
        drinking: false,
        discomfortLevel: 1, // 1, 2, 3
        dead: false
    });

    return (
        <AnimalContext.Provider value={{ water, setWater, animalState, setAnimalState}}>
            {props.children}
        </AnimalContext.Provider>
    );
}

export function useWater() {
    const context = useContext(AnimalContext);
    const {water, setWater} = context;
    return {water, setWater};
}

export function useAnimalState() {
    const context = useContext(AnimalContext);
    const {animalState, setAnimalState} = context;
    return {animalState, setAnimalState};
}
