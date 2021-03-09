import React, { useState, useEffect } from "react";
import Chart from "../Chart/index";
import Button from "../Button/index";
import Container from "../Container/index";

import {useWater, useAnimalState} from "../../context/Animal";
import {useWaterAvaible} from "../../context/Environment";

import "./styles.css";

const Animal = () => {

    const [intervalo, setIntervalo] = useState(null);

    const {animalState, setAnimalState} = useAnimalState();

    const {water, setWater} = useWater();

    const [data, setData] = useState([]);

    const {waterAvaible, setWaterAvaible} = useWaterAvaible();

    useEffect(() => {
        setIntervalo( setInterval(generateNumber, 1000) );
    }, []);

    useEffect(() => {
        const decrement = water.randomNumber * water.behaviorInterference;
        setWater(prevState => {
            return { ...prevState, currentValue: parseFloat((water.currentValue - decrement).toFixed(2)) }
        });
    }, [water.randomNumber]);

    useEffect(() => {
        setData(data.concat([water.currentValue]));
    }, [water.currentValue]);

    useEffect(() => {
        if(water.currentValue <= 0) 
            clearInterval( intervalo );
    }, [water.currentValue]);

    useEffect(() => {
        if(water.currentValue <=  (water.capacity *  water.lackRate / 2 )) {
            criticalState();
            if(waterAvaible > 0)
                drinkWater();
        }else if(water.currentValue <=  (water.capacity *  water.lackRate)){
            discomfortState();
            if(waterAvaible > 0)
                drinkWater();
        }else{
            defaultState();
        }
    }, [water.currentValue]);

    function generateNumber() {
        const variationValue = water.decrementRate  * water.variationRate;
        const max = (water.decrementRate + variationValue);
        const min = (water.decrementRate - variationValue);
        const newNumber = (Math.random() * (max - min) + min).toFixed(2);
        setWater(prevState => {
            return { ...prevState, randomNumber: newNumber }
        });
    }

    function criticalState(){
        setAnimalState(prevState => {
            return { ...prevState, discomfortLevel: 3 }
        });
        setWater(prevState => {
            return { ...prevState, behaviorInterference:  0.4 }
        });
    }

    function discomfortState(){
        setAnimalState(prevState => {
            return { ...prevState, discomfortLevel: 2 }
        });
        setWater(prevState => {
            return { ...prevState, behaviorInterference:  0.5 }
        });
    }

    function defaultState(){
        setAnimalState(prevState => {
            return { ...prevState, discomfortLevel: 1 }
        });
        setWater(prevState => {
            return { ...prevState, behaviorInterference:  1 }
        });
    }

    function drinkWater(){
        const drinkedWater = waterAvaible + water.currentValue > water.capacity ? water.capacity - water.currentValue : waterAvaible;
        setWater(prevState => {
            return { ...prevState, currentValue: parseFloat((water.currentValue + drinkedWater).toFixed(2)) }
        });
        setWaterAvaible(waterAvaible - drinkedWater);
    }

    function handleRestart(e){
        const button = e.target;
        button.disabled = true;
        clearInterval( intervalo );
        setData([]);
        setWater(prevState => {
            return { ...prevState, currentValue: parseFloat(water.capacity) }
        });
        setIntervalo( setInterval(generateNumber, 1000) );
        setTimeout(function(){ button.disabled = false; }, 1000);
    }

    return(
        <>
            <Container>
                <div className="animal-container">
                    <div className="animal-info">
                        <p>capacidade Máx. de água: <b>{water.capacity} </b></p>
                        <p>Nivel de água: <b>{water.currentValue} </b></p>
                        <p>taxa de decremento (ml): <b>{(water.decrementRate * water.behaviorInterference).toFixed(2)} </b></p>
                        <p>variaçao de decremento (%): <b>{water.variationRate * 100} </b></p>
                        <p>decremento: <b>{(water.randomNumber * water.behaviorInterference).toFixed(2)} </b></p>
                        <br/>
                        <p>água disponivel: <b>{waterAvaible}</b></p>
                    </div>
                    <div className="animal-config">
                        <Button label={"Clear"} onClick={handleRestart} />
                    </div>
                </div>
            </Container>
            <Chart data={data} maxValue= {water.capacity} ></Chart>
        </>
    );
}

export default Animal;