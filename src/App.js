import React from 'react';
import HeroSection from './Components/HeroSection'; // Import the HeroSection component
import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AboutScreen from './Components/AboutScreen'; 


function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection />
      <AboutScreen/>
    </div>
  );
}

export default App;
