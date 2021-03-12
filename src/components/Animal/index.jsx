import React, { useState, useEffect } from "react";
import Chart from "../Chart/index";
import Button from "../Button/index";
import Container from "../Container/index";

import {useWater, useAnimalState} from "../../context/Animal";
import {useWaterAvaible} from "../../context/Environment";

import "./styles.css";
import { GiDeadEye } from "react-icons/gi";

const Animal = () => {

    const [intervalo, setIntervalo] = useState(null);

    const [disconforColor, setDisconforColor] = useState({color: 'green'});

    const {animalState, setAnimalState} = useAnimalState();

    const {water, setWater} = useWater();

    const [data, setData] = useState([]);

    const {waterAvaible, setWaterAvaible} = useWaterAvaible();

    useEffect(() => {
        setIntervalo( setInterval(generateNumber, 1000) );
    }, []);

    // useEffect(() => {
    //     if(animalState.sleeping){
    //         setWater(prevState => {
    //             return { ...prevState, decrementRate: 6 }
    //         });
    //     }else{
    //         setWater(prevState => {
    //             return { ...prevState, decrementRate: 10 }
    //         });
    //     }
    // }, [animalState.sleeping]);

    useEffect(() => {
        let decrement = water.randomNumber * -1;
        if(animalState.sleeping) {
            decrement *= water.sleepRate;
        }
        if(animalState.drinking) {
            const drinkedWater = waterAvaible < water.drinkRate ? waterAvaible : water.drinkRate
            decrement += drinkedWater;
            setWaterAvaible(waterAvaible - drinkedWater);
        }
        setWater(prevState => {
            return { ...prevState, currentValue: parseFloat((water.currentValue + decrement).toFixed(2)) }
        });
    }, [water.randomNumber]);

    useEffect(() => {
        setData(data.concat([water.currentValue]));
    }, [water.currentValue]);

    useEffect(() => {
        if(water.currentValue <= 0) 
            setAnimalState(prevState => { return { ...prevState, dead: true } });
    }, [water.currentValue]);

    useEffect(() => {
        if(animalState.dead) 
            death();
    }, [animalState.dead]);

    useEffect(() => {
        if(water.currentValue <=  (water.capacity *  water.lackRate / 2 )) {
            criticalState();
        }else if(water.currentValue <=  (water.capacity *  water.lackRate)){
            discomfortState();
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

    function death(){
        clearInterval( intervalo );
    }

    function criticalState(){
        setAnimalState(prevState => { return { ...prevState, discomfortLevel: 3 } });
        setDisconforColor({color: 'FireBrick'});
    }

    function discomfortState(){
        setAnimalState(prevState => { return { ...prevState, discomfortLevel: 2 } });
        setDisconforColor({color: 'goldenRod'});
    }

    function defaultState(){
        setAnimalState(prevState => { return { ...prevState, discomfortLevel: 1 } });
        setDisconforColor({color: 'green'});
    }

    function handleRestart(e){
        const button = e.target;
        button.disabled = true;
        clearInterval( intervalo );
        setData([]);
        setWater(prevState => {
            return { ...prevState, currentValue: parseFloat(water.capacity) }
        });
        setAnimalState(prevState => { return { ...prevState, dead: false } });
        setIntervalo( setInterval(generateNumber, 1000) );
        setTimeout(function(){ button.disabled = false; }, 1000);
    }

    return(
        <>
            <Container>
                <div className="animal-container">
                    <div className="animal-info">
                        <h2 style={disconforColor}>nivel de desconforto: {animalState.discomfortLevel}</h2>
                        <p>capacidade Máx. de água (ml): <b>{water.capacity} </b></p>
                        <p>Nivel de água (ml): <b>{water.currentValue} </b></p>
                        <p>decremento (ml/s): <b>{animalState.sleeping ? (water.decrementRate * water.sleepRate).toFixed(2) : water.decrementRate} </b></p>
                        <p>variaçao de decremento (%): <b>{water.variationRate * 100} </b></p>
                        <p>decremento: <b>{animalState.sleeping ? (water.randomNumber * water.sleepRate).toFixed(2) : water.randomNumber} </b></p>
                        <p>água disponivel (ml): <b>{(waterAvaible).toFixed(2)}</b></p>
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