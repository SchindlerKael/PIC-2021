import React, {useState, useEffect} from 'react'
import IconContent from "../IconContent/index";
import {useWater} from "../../context/Animal";

import { IoIosWater } from 'react-icons/io';

import "./styles.css";

const Interactions = () => {

  const teste = 100;

  const {water, setWater} = useWater();

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if(water.currentValue <= 0 ) 
      setDisabled(true);
    else if(water.currentValue > 0 && disabled)
      setDisabled(false);
  }, [water.currentValue]);

  function plussWater(e){
    const newValue = water.currentValue + teste > water.capacity ? water.capacity : water.currentValue + teste;
    setWater(prevState => {
      return { ...prevState, currentValue: parseFloat((newValue).toFixed(2)) }
    });
  }

  return (
    <div className="interaction-container">
      <IconContent icon={<IoIosWater/>} onClick={plussWater} disabled={disabled}/>
    </div>
  )
}


export default Interactions