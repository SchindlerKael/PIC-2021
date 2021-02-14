import React, { useState, useEffect } from "react";
import Chart from "../Chart/index";
import Button from "../Button/index";

import {useWater} from "../../context/Animal";

import "./styles.css";

const Animal = () => {

    const [intervalo, setIntervalo] = useState(null);

    const {water, setWater} = useWater();

    // const [water, setWater] = useState({
    //     capacity: 500,
    //     currentValue: 500,
    //     decrementRate: 10.7,
    //     variationRate: 10,
    //     randomNumber: 0
    // })

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(data.concat([water.currentValue]));
    }, [water.currentValue]);

    useEffect(() => {
        setIntervalo( setInterval(generateNumber, 1000) );
    }, []);

    useEffect(() => {
        setWater(prevState => {
            return { ...prevState, currentValue: parseFloat((water.currentValue - water.randomNumber).toFixed(2)) }
        });
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
                    <p>capacidade Máx. de água: <b>{water.capacity} </b></p>
                    <p>Nivel de água: <b>{water.currentValue} </b></p>
                    <p>taxa padrão de decremento: <b>{water.decrementRate} </b></p>
                    <p>variaçao de decremento: <b>{water.variationRate}% </b></p>
                    <p>decremento: <b>{water.randomNumber} </b></p>
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