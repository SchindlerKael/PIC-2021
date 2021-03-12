import React, {useState, useEffect} from 'react'
import IconContent from "../IconContent/index";
import ToggleButton from "../ToggleButton/index";
import Container from "../Container/index";

import {useWater, useAnimalState} from "../../context/Animal";
import {useWaterAvaible} from "../../context/Environment";

import { MdLocalDrink } from 'react-icons/md';
import { GiDrinking } from 'react-icons/gi';
import { RiZzzLine } from 'react-icons/ri';


import "./styles.css";

const Interactions = () => {

  const ml = 500;

  const {animalState, setAnimalState} = useAnimalState();

  const {water, setWater} = useWater();

  const {waterAvaible, setWaterAvaible} = useWaterAvaible();

  const [disabled, setDisabled] = useState({
    fill: false,
    drink: false,
    sleep: false,
  });
  
  useEffect(() => {
    if(animalState.sleeping || waterAvaible <= 0 || water.currentValue > (water.capacity - water.drinkRate)) {
      setDisabled(prevState => { return { ...prevState, drink: true } });
      if(animalState.drinking)
        handleDrinkChange();
    }else{
      setDisabled(prevState => { return { ...prevState, drink: false } });
    }
  }, [waterAvaible, water.currentValue]);

  useEffect(() => { 
    setDisabled(prevState => { return { ...prevState, sleep: animalState.drinking } });
  }, [animalState.drinking]);

  const handleFillWater = () => {
    const newValue = waterAvaible + ml;
    setWaterAvaible(newValue);
  }

  const handleDrinkChange = () => {
    setAnimalState(prevState => { return { ...prevState, drinking: !animalState.drinking } });
  }; 

  const handleSleepChange = () => {
    setAnimalState(prevState => { return { ...prevState, sleeping: !animalState.sleeping } });
  };

  return (
    <Container>
      <div className="interaction-container">
        <IconContent icon={<MdLocalDrink/>} 
          onClick={handleFillWater} 
          disabled={animalState.dead ? true : disabled.fill}
        />

        <ToggleButton icon={<GiDrinking/>} 
          onClick={handleDrinkChange} 
          value={animalState.drinking} 
          disabled={animalState.dead ? true : disabled.drink}
        />
        <ToggleButton icon={<RiZzzLine/>} 
          onClick={handleSleepChange} 
          value={animalState.sleeping} 
          disabled={animalState.dead ? true : disabled.sleep}
        />
      </div>
    </Container>

  )
}


export default Interactions