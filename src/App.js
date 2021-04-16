import React from "react";
import Routes from "./routes";

import Header from "./components/Header/index";

import Footer from "./components/Footer/index";
import HomePage from "./components/HomePage/index";


import "./styles.css";

const App = () => (
  <div className="App">
    <Header />
    {/* <Routes /> */}
    <HomePage />
    <Footer />
  </div>
);


export default App;
