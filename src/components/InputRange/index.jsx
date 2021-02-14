import React from 'react'


import "./styles.css";

const InputRange = ({minValue, maxValue, stepValue, onChange}) => {
  return (
    <div className="inputRange">
      <input type="range" min={minValue} max={maxValue} step={stepValue} onChange={onChange}></input>
    </div>
  )
}


export default InputRange