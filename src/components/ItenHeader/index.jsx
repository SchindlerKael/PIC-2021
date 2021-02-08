import React, {Component} from 'react';
import { Link } from "react-router-dom";


import "./styles.css";

import { MdKeyboardArrowRight} from 'react-icons/md';

export default (props) => {
  
    return (
    <li><a href="#"> { props.name } </a></li>
    );
};

