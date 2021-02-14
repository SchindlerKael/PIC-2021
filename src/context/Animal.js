import React, { createContext, useState, useContext } from 'react'

export const AnimalContext = createContext({});

export const AnimalProvider = (props) => {
    
    const [water, setWater] = useState({
        capacity: 500,
        currentValue: 500,
        decrementRate: 10.7,
        variationRate: 10,
        randomNumber: 0
    });

    return (
        <AnimalContext.Provider value={{ water, setWater}}>
            {props.children}
        </AnimalContext.Provider>
    );
}

export function useWater() {
    const context = useContext(AnimalContext);
    const {water, setWater} = context;
    return {water, setWater};
}
