import React from 'react'


import "./styles.css";

const InputRange = ({minValue, maxValue, stepValue, onChange}) => {
  return (
      <input className="inputRange" type="range" min={minValue} max={maxValue} step={stepValue} onChange={onChange}></input>
  )
}


export default InputRange