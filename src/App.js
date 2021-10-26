import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";
import "./styles/index.css";
import Header from "./components/section-components/Header";
import Home from "./views/Home";
import About from "./views/About";
import ContactUs from "./views/ContactUs";

function App() {
  return (
    <div className="center_view">
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contactUs" exact component={ContactUs} />
        {/* <Route path="/product" exact component={Home}/>
        <Route path="/services" exact component={Home}/>
        <Route path="/contact" exact component={Home}/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
