import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

import InputRange from "../InputRange/index";

import "./styles.css";

export default ({currentValue, maxValue}) => { 
    const [hAxisRange, setHAxisRange] = useState(10);
    
    const [options, setOptions] = useState({
        title: 'Nivel de Água',
        hAxis: { title: 'Time (s)', viewWindow: { min: 0, max: hAxisRange }},
        vAxis: { title: 'Volume (ml)',viewWindow: { min: 0, max: maxValue }},
    });
    
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(data.concat([currentValue]));
    }, [currentValue]);

    const hAxisValues = () => {
        return data.slice(data.length - (parseInt(hAxisRange) + 1) < 0 ? 0 : data.length - (parseInt(hAxisRange) + 1));
    }

    function handleChange(e) {    
        setHAxisRange(e.target.value); 
    }

    return(
        <div className="chart-container">
            <Chart
                width={'600px'}
                height={'400px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[['x', 'Water']].concat( Array.from(hAxisValues().entries()) )}
                options={{
                    title: 'Nivel de Água',
                    hAxis: { 
                        title: 'Time (s)', 
                        viewWindow: { min: 0, max: hAxisRange }
                    },
                    vAxis: { 
                        title: 'Volume (ml)',
                        viewWindow: { min: 0, max: maxValue }
                    },
                }}
                rootProps={{ 'data-testid': '1' }}
            />
            <InputRange minValue={10} maxValue={100} stepValue={10} onChange={handleChange}/>
        </div>

        );
}

