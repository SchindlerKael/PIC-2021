import React from "react";

import "./styles.css";

import ItenDropDown from '../ItenDropDown/index.jsx';
import ItenHeader from '../ItenHeader/index.jsx';

import { AiOutlineMenu} from 'react-icons/ai';
import { AiOutlineClose} from 'react-icons/ai';

const Header = () => {

    const openMenu = () => {
        document.getElementById('menu').style.width = '250px';
    };

    const closeMenu = () => {
        document.getElementById('menu').style.width = '0';
    };

    return(
    <div>
        <header>
            <li onClick={openMenu}><a href="#" className="btn-open"> <AiOutlineMenu/> Abrir</a></li>
        </header>
        <nav id="menu">
            <ul>
                <li onClick={closeMenu}><a href="#" className="btn-close"> <AiOutlineClose/> Fechar</a></li>
                <ItenDropDown name="item 1">
                    <ItenHeader name="item 1.1"/>
                    <ItenHeader name="item 1.2"/>
                </ItenDropDown>
                <ItenDropDown name="item 2">
                    <ItenHeader name="item 2.1"/>
                    <ItenHeader name="item 2.2"/>
                </ItenDropDown>                
                <ItenHeader name="item 3"/>
                <ItenHeader name="item 4"/>

            </ul>
        </nav>
    </div>
    )
};

export default Header;