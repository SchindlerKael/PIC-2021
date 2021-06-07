import React, { createContext, useState } from 'react';

export const EnvironmentContext = createContext({});

export const EnvironmentProvider = (props) => {

    const [waterAvaible, setWaterAvaible] = useState(0);

    return (
        <EnvironmentContext.Provider value={{ waterAvaible, setWaterAvaible}}>
            {props.children}
        </EnvironmentContext.Provider>
    );
}


