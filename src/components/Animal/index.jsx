import React, { useState, useEffect } from "react";
import Chart from "../Chart/index";
import Button from "../Button/index";

import "./styles.css";

const Animal = () => {

    const [intervalo, setIntervalo] = useState(null);

    const [water, setWater] = useState( { 
        capacity: 500,
        currentValue: 500, 
        decrementRate: 30.7, 
        variationRate: 10, 
        randomNumber: 0
    } );

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(data.concat([water.currentValue]));
    }, [water.currentValue]);

    useEffect(() => {
        setIntervalo( setInterval(generateNumber, 1000) );
    }, []);

    useEffect(() => {
        updateWaterValue();
    }, [water.randomNumber]);

    useEffect(() => {
        if(water.currentValue <= 0) 
            clearInterval( intervalo );
    }, [water.currentValue]);

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
            <div className="animal-container">
                <div className="animal-info">
                    <p>capacidade Máx. de água: {water.capacity} </p>
                    <p>Nivel de água: {water.currentValue} </p>
                    <p>taxa padrão de decremento: {water.decrementRate} </p>
                    <p>variaçao de decremento: {water.variationRate}%</p>
                    <p>decremento: {water.randomNumber} </p>
                </div>
                <div className="animal-config">
                    <Button label={"Clear"} onClick={handleRestart} />
                </div>
            </div>

            <Chart data={data} maxValue= {water.capacity} ></Chart>
        </>
    );
}

export default Animal;