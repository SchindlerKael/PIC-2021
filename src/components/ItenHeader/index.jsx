import React from 'react';
import { Link } from "react-router-dom";

import "./styles.css";

export default (props) => {
  
    return (
    <li><a href="#"> { props.name } </a></li>
    );
};

