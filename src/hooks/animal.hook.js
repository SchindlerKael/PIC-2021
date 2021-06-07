import { useContext } from "react";
import {AnimalContext} from "../context/Animal";

export function useWater() {
  const context = useContext(AnimalContext);
  const {water, setWater} = context;
  return {water, setWater};
}

export function useAnimalState() {
  const context = useContext(AnimalContext);
  const {animalState, setAnimalState} = context;
  return {animalState, setAnimalState};
}