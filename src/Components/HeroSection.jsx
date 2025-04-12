import React from 'react';
import '../App.css';
// import Header from './Components/Header';
import img from "../assets/logo-light.png";
import bgvideo from "../assets/Office.mp4";

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Main Navigation Bar */}
      <header  style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 40px",
        color: "white",
        position: "relative",
        zIndex: "6",
        textDecoration: "none",
      }}>
        <img src={img} alt="" className='Logo' />

        <nav className='Home-fields' style={{ display: "flex", gap: "30px", fontWeight: "bold", textDecoration: "none", color:"white", width: "50%"}}>
          <a href="#">Home</a>
          <a href="#">Company</a>
          <a href="#">Services</a>
          <a href="#">Industries</a>
          <a href="#">Contacts</a>
        </nav>

        <button style={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          fontWeight: "bold",
          border: "none",
          cursor: "pointer"
        }}>
          Apply Job
        </button>
      </header>

      <div>

      </div>
      
      <video className="bg-video" autoPlay muted loop playsInline>
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay">
      {/* <span>Welcome to</span>
        <h1>Pravas IT Solutions</h1>
        <p>We are experienced professional who understand that IT Services is chnaging, and are true partners who care about your success. Our team provides a consultative aproach on emerging technology</p>
        <h1>FOR SEAMLESS DIGITAL TRANSFORMATION.</h1>
        <button className="hero-button">Contact Us</button> */}
      </div>

      <div className="hero-content">
        <span>Welcome to</span>
        <h1>Pravas IT Solutions</h1>
        <p>We are experienced professional who understand that IT Services is chnaging, and are true partners who care about your success. Our team provides a consultative aproach on emerging technology</p>
        <h1>FOR SEAMLESS DIGITAL TRANSFORMATION.</h1>
        <button className="hero-button">Contact Us</button>
      </div>
    </section>
  );
};

export default HeroSection;
