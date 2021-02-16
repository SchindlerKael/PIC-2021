import React, { useState } from "react";
import { Chart } from "react-google-charts";

import Container from "../Container/index";
import InputRange from "../InputRange/index";

import "./styles.css";

export default ({data, maxValue}) => { 
    const [hAxisRange, setHAxisRange] = useState(10);

    function hAxisValues() {
        if(data.length <= 0){
            return [0];
        }
        return data.slice(data.length - (parseInt(hAxisRange) + 1) < 0 ? 0 : data.length - (parseInt(hAxisRange) + 1));
    }

    function handleChange(e) {    
        setHAxisRange(e.target.value); 
    }

    return(
        <Container>
            <div className="chart-container">
                <Chart
                    width={'640px'}
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
        </Container>

        );
}

