import React, { useState, useEffect } from "react";
import Chart from "../Chart/index";
import Button from "../Button/index";

import "./styles.css";

const Animal = () => {

    const [intervalo, setIntervalo] = useState(null);

    const [waterCapacity, setWaterCapacity] = useState(500);
    const [waterCurrentValue, setWaterCurrentValue] = useState(500);
    const [waterDecrementRate, setWaterDecrementRate] = useState(10.7);
    const [waterVariationRate, setWaterVariationRate] = useState(10);
    const [waterRandomNumber, setWaterRandomNumber] = useState(0);

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(data.concat([waterCurrentValue]));
    }, [waterCurrentValue]);

    useEffect(() => {
        setIntervalo( setInterval(generateNumber, 1000) );
    }, []);

    useEffect(() => {
        updateWaterValue();
    }, [waterRandomNumber]);

    useEffect(() => {
        if(waterCurrentValue <= 0) 
            clearInterval( intervalo );
    }, [waterCurrentValue]);

    function generateNumber() {
        const variationValue = waterDecrementRate * waterVariationRate / 100 ;
        const max = (waterDecrementRate + variationValue);
        const min = (waterDecrementRate - variationValue);
        const newNumber = (Math.random() * (max - min) + min).toFixed(2);
        setWaterRandomNumber(newNumber);
    }

    function updateWaterValue(){
        setWaterCurrentValue(parseFloat((waterCurrentValue - waterRandomNumber).toFixed(2)));
    }

    function handleRestart(e){
        const button = e.target;
        button.disabled = true;
        clearInterval( intervalo );
        setData([]);
        setWaterCurrentValue(parseFloat(waterCapacity));
        setIntervalo( setInterval(generateNumber, 1000) );
        setTimeout(function(){ button.disabled = false; }, 1000);
    }

    return(
        <>
            <div className="animal-container">
                <div className="animal-info">
                    <p>capacidade Máx. de água: <b>{waterCapacity} </b></p>
                    <p>Nivel de água: <b>{waterCurrentValue} </b></p>
                    <p>taxa padrão de decremento: <b>{waterDecrementRate} </b></p>
                    <p>variaçao de decremento: <b>{waterVariationRate}% </b></p>
                    <p>decremento: <b>{waterRandomNumber} </b></p>
                </div>
                <div className="animal-config">
                    <Button label={"Clear"} onClick={handleRestart} />
                </div>
            </div>

            <Chart data={data} maxValue= {waterCapacity} ></Chart>
        </>
    );
}

export default Animal;