import React, { useState } from "react";

import Button from "../Button/index";

import {useWater, useAnimalState} from "../../context/Animal";

import "./styles.css";

const AnimalForm = (props) => {

    return(
        <form>
            <div className="form-content">
                <label>
                    Capacidade:
                    <input type="text" name="name" />
                </label>

                <label>
                    Taxa de queda de água (dormindo):
                    <input type="text" name="name" />
                </label>

                <label>
                    Taxa de queda de água (Acordado):
                    <input type="text" name="name" />
                </label>

                <label>
                    Variação na Taxa de Queda:
                    <input type="text" name="name" />
                </label>

                <label>
                    Taxa de Ingestão de água:
                    <input type="text" name="name" />
                </label>

                <label>
                    Porcentagem de Alerta de falta de água:
                    <input type="text" name="name" />
                </label>
            </div>
            <div class="button-content">
                <Button label={"Submit"} onClick={null} />
            </div>
        </form>
    );
}

export default AnimalForm;