import React from "react";
import Routes from "./routes";

import Header from "./components/Header/index";
import Content from "./components/Content/index";

import Footer from "./components/Footer/index";
import HomePage from "./components/HomePage/index";


import "./styles.css";

const App = () => (
  <div className="App">
    <Header />
    <HomePage />
    <Footer />

    {/* <Content>
      <Routes />
    </Content> */}
  </div>
);


export default App;
