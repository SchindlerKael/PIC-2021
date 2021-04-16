import React, { useState, useEffect } from "react";
import Chart from "../Chart/index";
import AnimalViwer from "../AnimalViwer/index";
import Container from "../Container/index";

import {useWater, useAnimalState} from "../../context/Animal";
import {useWaterAvaible} from "../../context/Environment";

import "./styles.css";

const Animal = () => {

    let intervalo;

    const [time, setTime] = useState(0);

    const {animalState, setAnimalState} = useAnimalState();

    const {water, setWater} = useWater();

    const [data, setData] = useState([]);

    const {waterAvaible, setWaterAvaible} = useWaterAvaible();

    useEffect(() => {
        if(animalState.dead) return () => {
            clearTimeout(intervalo);
        };
        intervalo = setTimeout(() => {
            setTime(time + 1); 
        }, 1000);
        return () => {
            clearTimeout(intervalo);
        };
    }, [time],);

    useEffect(() => {
        if(animalState.sleeping){
            setWater(prevState => {
                return { ...prevState, decrementRate: water.sleepRate }
            });
        }else{
            setWater(prevState => {
                return { ...prevState, decrementRate: water.awakeRate }
            });
        }
    }, [animalState.sleeping]);

    useEffect(() => {
        setWater(prevState => {
            return { ...prevState, randomNumber: generateNumber() }
        });
        let decrement = water.randomNumber * -1;

        if(animalState.drinking) {
            const drinkedWater = waterAvaible < water.drinkRate ? waterAvaible : water.drinkRate
            decrement += drinkedWater;
            setWaterAvaible(waterAvaible - drinkedWater);
        }
        setWater(prevState => {
            return { ...prevState, currentValue: parseFloat((water.currentValue + decrement).toFixed(2)) }
        });
    }, [time]);

    useEffect(() => {
        setData(data.concat([water.currentValue]));
    }, [water.currentValue]);

    useEffect(() => {
        if(water.currentValue <=  (water.capacity *  water.lackRate / 2 )) {
            criticalState();
        }else if(water.currentValue <=  (water.capacity *  water.lackRate)){
            discomfortState();
        }else{
            defaultState();
        }
    }, [water.currentValue]);

    useEffect(() => {
        if(water.currentValue <= 0) {
            setAnimalState(prevState => { return { ...prevState, dead: true } });
            // death();
        }
    }, [water.currentValue]);

    function generateNumber() {
        const variationValue = water.decrementRate  * water.variationRate;
        const max = (water.decrementRate + variationValue);
        const min = (water.decrementRate - variationValue);
        const newNumber = (Math.random() * (max - min) + min).toFixed(2);
        return newNumber;
    }

    function criticalState(){
        setAnimalState(prevState => { return { ...prevState, discomfortLevel: 3 } });
    }

    function discomfortState(){
        setAnimalState(prevState => { return { ...prevState, discomfortLevel: 2 } });
    }

    function defaultState(){
        setAnimalState(prevState => { return { ...prevState, discomfortLevel: 1 } });
    }

    function death(){
        clearTimeout( intervalo );
    }

    function handleRestart(e){
        const button = e.target;
        button.disabled = true;
        setData([]);
        setWater(prevState => {
            return { ...prevState, currentValue: parseFloat(water.capacity) }
        });
        setAnimalState(prevState => { return { ...prevState, dead: false } });
        setTimeout(function(){ button.disabled = false; }, 1000);
    }

    return(
        <>
            <AnimalViwer 
                water={water} 
                waterAvaible={waterAvaible}
                discomfortLevel={animalState.discomfortLevel} 
                handleRestart={handleRestart}
            />
            <Chart 
                data={data} 
                maxValue= {water.capacity}
            />
        </>
    );
}

export default Animal;