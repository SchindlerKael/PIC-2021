import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

import "./styles.css";

export default (props) => {    
    const [options, setOptions] = useState({
        hAxis: { title: 'Time (s)'},
        vAxis: { title: 'Volume (ml)',viewWindow: { min: 400, max: 500 }},
    });
    
    const [data, setData] = useState([]);

    useEffect(() => {
        if(data.length > 10) {
            data.splice(0, 1);
        }
        setData(data.concat([props.currentValue]));
        console.log(Array.from(data.entries()));
    }, [props.currentValue]);

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

