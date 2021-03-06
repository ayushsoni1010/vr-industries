import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";
import "./styles/index.css";
import Header from "./components/section-components/Header";
import Home from "./views/Home";
import About from "./views/About";
import ContactUs from "./views/ContactUs";
import Footer from "./components/section-components/Footer";
import Products from "./views/Products";
import Services from "./views/Services";

function App() {
  return (
    <div className="center_view">
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/products" exact component={Products} /> 
        <Route path="/contactUs" exact component={ContactUs} />
        <Route path="/services" exact component={Services}/>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
