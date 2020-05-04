import React from 'react';
import './App.css';
import Header from './components/Header/';
import Hero from './components/Hero/';
import Action from './components/Action/';
function App() {
  return (
    <div className="App">
      <div className="mobile-lock">
        <span className="text">Please rotate your device</span>
      </div>
      <div className="header c-padding">
        <Header />
      </div>
      <div className="hero">
        <Hero />
      </div>
      <div className="below-fold">
        <Action />
      </div>
    </div>
  );
}

export default App;
