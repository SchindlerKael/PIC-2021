import { useContext } from "react";
import {EnvironmentContext} from "../context/Environment";

export function useWaterAvaible() {
    const context = useContext(EnvironmentContext);
    const {waterAvaible, setWaterAvaible} = context;
    return {waterAvaible, setWaterAvaible};
}