import React, { useState, useEffect } from "react";

import Container from "../Container/index"
import Button from "../Button/index";

import "./styles.css";

const AnimalViwer = ({water, waterAvaible, discomfortLevel, handleRestart}) => {
    const [discomfortColor, setDiscomfortColor] = useState({color: 'green'});

    useEffect(() => {
        switch(discomfortLevel){
            case 3:
                setDiscomfortColor({color: 'FireBrick'});
                break;
            case 2:
                setDiscomfortColor({color: 'goldenRod'});
                break;
            case 1:
                setDiscomfortColor({color: 'green'});
                break;
        }
    }, [discomfortLevel]);

    return(
        <>
            <Container>
                <div className="animal-container">
                    <div className="animal-info">
                        <h2 style={discomfortColor}>nivel de desconforto: {discomfortLevel}</h2>
                        <p>capacidade Máx. de água (ml): <b>{water.capacity} </b></p>
                        <p>Nivel de água (ml): <b>{water.currentValue} </b></p>
                        <p>decremento (ml/s): <b>{water.decrementRate} </b></p>
                        <p>variaçao de decremento (%): <b>{water.variationRate * 100} </b></p>
                        <p>decremento: <b>{water.randomNumber} </b></p>
                        <p>água disponivel (ml): <b>{(waterAvaible).toFixed(2)}</b></p>
                    </div>
                    <div className="animal-config">
                        <Button label={"Clear"} onClick={handleRestart} />
                    </div>
                </div>
            </Container>
        </>
    );
}

export default AnimalViwer;