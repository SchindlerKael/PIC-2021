import React from "react";

import "./styles.css";

import Animal from "../Animal/index";
import Interactions from "../Interaction/index";


import {AnimalProvider} from "../../context/Animal";
import {EnvironmentProvider} from "../../context/Environment";


const HomePage = () => {
    
    return(
        <EnvironmentProvider>
            <AnimalProvider>
                <div className="home-page">
                    <Interactions/>
                    <Animal/>
                </div>
            </AnimalProvider>
        </EnvironmentProvider>
        );
}

export default HomePage;