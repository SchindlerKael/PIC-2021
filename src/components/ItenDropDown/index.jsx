import React from 'react';

import "./styles.css";

import { MdArrowDropDown } from 'react-icons/md';

const ItenDropDown = (props) => {

    const dropdown = (event) => {

        console.log(event.currentTarget);
        let li = event.currentTarget;
        let a = li.children[0];
        let dropdown = li.children[1];
        if(dropdown.style.height === 'auto'){
            dropdown.style.height = '0';
            a.children[0].style.transform = 'rotate(0deg)';
        }else{
            dropdown.style.height = 'auto';
            a.children[0].style.transform = 'rotate(-90deg)';
        }
    };
    
    return (
        <li onClick={dropdown}>
            <a href="#">{props.name} <MdArrowDropDown/></a>
            <ul className="dropdown">
                {props.children}
            </ul>
        </li>
        
    )
}

export default ItenDropDown;