import React from 'react'

import Button from "../Button/index";

import {useWater} from "../../context/Animal";

import "./styles.css";

const Interactions = ({}) => {
  const teste = 100;
  const {water, setWater} = useWater();

  function plussWater(){
    setWater(prevState => {
      return { ...prevState, currentValue: parseFloat((water.currentValue + teste).toFixed(2)) }
    });
  }

  return (
    <Button label={"adicionar água"} onClick={plussWater} />
  )
}


export default Interactions