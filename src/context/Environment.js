import React, { createContext, useState, useContext } from 'react';


export const EnvironmentContext = createContext({});

export const EnvironmentProvider = (props) => {

    const [waterAvaible, setWaterAvaible] = useState(0);

    return (
        <EnvironmentContext.Provider value={{ waterAvaible, setWaterAvaible}}>
            {props.children}
        </EnvironmentContext.Provider>
    );
}

export function useWaterAvaible() {
    const context = useContext(EnvironmentContext);
    const {waterAvaible, setWaterAvaible} = context;
    return {waterAvaible, setWaterAvaible};
}

