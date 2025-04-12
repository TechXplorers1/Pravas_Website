import React from 'react';
import HeroSection from './Components/HeroSection'; // Import the HeroSection component
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">

      <Header/>
      <HeroSection />
    </div>
  );
}

export default App;
