import React, { useState, useEffect } from "react";
import Chart from "../Chart/index";

import "./styles.css";

const Animal = () => {

    const [water, setWater] = useState( { 
        capacity: 500,
        currentValue: 500, 
        decrementRate: 1.7, 
        variationRate: 10, 
        randomNumber: 0
    } );

    useEffect(() => {
        setInterval(generateNumber, 1000);
    }, []);

    useEffect(() => {
        updateWaterValue();
    }, [water.randomNumber]);

    function generateNumber() {
        const variationValue = water.decrementRate * water.variationRate / 100 ;
        const max = (water.decrementRate + variationValue);
        const min = (water.decrementRate - variationValue);
        const newNumber = (Math.random() * (max - min) + min).toFixed(2);
        setWater(prevState => {
            return { ...prevState, randomNumber: newNumber }
        });
    }

    function updateWaterValue(){
        setWater(prevState => {
            return { ...prevState, currentValue: parseFloat((water.currentValue - water.randomNumber).toFixed(2)) }
        });
    }

    return(
        <>
            <div className="animal-container">
                <p>capacidade Máx. de água: {water.capacity} </p>
                <p>Nivel de água: {water.currentValue} </p>
                <p>taxa padrão de decremento: {water.decrementRate} </p>
                <p>variaçao de decremento: {water.variationRate}%</p>
                <p>variação na taxa: {water.randomNumber} </p>
            </div>
            <Chart currentValue={water.currentValue} ></Chart>
        </>
    );
}

export default Animal;