import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './styles/index.css';
import Header from './components/section-components/Header';
import Home from './views/Home';

function App() {
  return (
    <div className="center_view">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
