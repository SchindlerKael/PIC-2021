import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

import "./styles.css";

export default ({currentValue, maxValue}) => {  
    const [options, setOptions] = useState({
        title: 'Nivel de Água',
        hAxis: { title: 'Time (s)', viewWindow: { min: 0, max: 10 }},
        vAxis: { title: 'Volume (ml)',viewWindow: { min: 0, max: maxValue }},
    });
    
    const [data, setData] = useState([]);

    useEffect(() => {
        if(data.length > 10) {
            setData(data.splice(0, 1));
        }
        setData(data.concat([currentValue]));
    }, [currentValue]);

    return(
        <div className="chart-container">
            <Chart
                width={'600px'}
                height={'400px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[['x', 'Water']].concat( Array.from(data.entries()) )}
                options={options}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>

        );
}

