import React, {useState, useEffect} from 'react'
import IconContent from "../IconContent/index";
import Container from "../Container/index";

import {useWater, useAnimalState} from "../../context/Animal";
import {useWaterAvaible} from "../../context/Environment";

import { IoIosWater } from 'react-icons/io';
import { RiZzzLine } from 'react-icons/ri';


import "./styles.css";

const Interactions = () => {

  const ml = 500;

  const {animalState, setAnimalState} = useAnimalState();

  const {water, setWater} = useWater();

  const {waterAvaible, setWaterAvaible} = useWaterAvaible();

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if(water.currentValue <= 0 ) 
      setDisabled(true);
    else if(water.currentValue > 0 && disabled)
      setDisabled(false);
  }, [water.currentValue]);

  function addWater(e){
    const newValue = waterAvaible + ml;
    setWaterAvaible(newValue);
  }

  return (
    <Container>
      <div className="interaction-container">
          <IconContent icon={<IoIosWater/>} onClick={addWater} disabled={disabled}/>
          <IconContent icon={<RiZzzLine/>} onClick={null} disabled={disabled}/>
      </div>
    </Container>

  )
}


export default Interactions