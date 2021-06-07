import React from "react";

import Button from "../Button/index";

import useForm from '../../hooks/form.hook';

import api from '../../services/api';

import "./styles.css";

const AnimalForm = (props) => {

    const [{ values, loading }, handleChange, handleSubmit] = useForm();

    const { water } = props;

    const sendAnimalSettings = () => {
        // const response = await api.post("animal/", water);
        // const animalUpdated = await api.put(`animal/${id}`, values);
        console.log(values);
    };

    return(
        <form onSubmit={handleSubmit(sendAnimalSettings)} id="water">
            <div className="form-content">
                <label>
                    Capacidade:
                    <input type="text" onChange={handleChange} name="capacity" value={water.capacity} />
                </label>

                <label>
                    Taxa de queda de água (dormindo):
                    <input type="text" onChange={handleChange} name="sleepRate" value={water.sleepRate} />
                </label>

                <label>
                    Taxa de queda de água (Acordado):
                    <input type="text" onChange={handleChange} name="awakeRate" value={water.awakeRate} />
                </label>

                <label>
                    Variação na Taxa de Queda:
                    <input type="text" onChange={handleChange} name="decrementRate" value={water.decrementRate} />
                </label>

                <label>
                    Taxa de Ingestão de água:
                    <input type="text" onChange={handleChange} name="drinkRate" value={water.drinkRate} />
                </label>

                <label>
                    Porcentagem de Alerta de falta de água:
                    <input type="text" onChange={handleChange} name="lackRate" value={water.lackRate} />
                </label>
            </div>
            <div class="button-content">
                <Button type="submit" label="Submit" />
            </div>
        </form>
    );
}

export default AnimalForm;