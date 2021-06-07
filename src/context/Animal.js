import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';


export const AnimalContext = createContext({});

const loadingWater = async setWater => {
    const results = await api.get('/animal');
    setWater(results.data.animal);
};  

export const AnimalProvider = (props) => {
    
    const [water, setWater] = useState({});
    useEffect(() => {
        loadingWater(setWater);
    }, []);

    const [animalState, setAnimalState] = useState({
        sleeping: false,
        drinking: false,
        discomfortLevel: 1,
        dead: false
    });

    return (
        <AnimalContext.Provider value={{ water, setWater, animalState, setAnimalState}}>
            {props.children}
        </AnimalContext.Provider>
    );
}
