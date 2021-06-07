import React from 'react';

import './styles.css';

import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import HomePage from "../../components/HomePage/index";

const Main = (props) => {
    return (
        <>
        <Header />
        <HomePage />
        <Footer />
        </>
    )
}

export default Main;