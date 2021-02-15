import React from "react";

import "./styles.css";

import Animal from "../Animal/index";
import Interactions from "../Interaction/index";


import {AnimalProvider} from "../../context/Animal";

const HomePage = () => {
    
    return(
        <AnimalProvider>
            <div className="home-page">
                <Interactions/>
                <Animal/>
            </div>
        </AnimalProvider>
        );
}

export default HomePage;