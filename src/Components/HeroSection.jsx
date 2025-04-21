import React from 'react';
import '../App.css';
import img from "../assets/logo-light.png";
import bgvideo from "../assets/Office.mp4";
import "./hero_text_cont.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Main Navigation Bar */}
      <header style={{
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

        <nav className='Home-fields' style={{ display: "flex", gap: "30px", fontWeight: "bold", textDecoration: "none", color: "white", width: "50%" }}>
          <a href="#">Home</a>

          {/* Dropdown for "Company" */}
          <div className="company-dropdown">
            <a href="#" className="dropdown-trigger">Company</a>
            <div className="dropdown-content">
              <a href="#about-us" onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                const aboutSection = document.getElementById('about-us');
                aboutSection.scrollIntoView({ behavior: 'smooth' });
                }}>
                About Us
              </a>
              <a href="#why-choose-us" onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                const whyChooseUsSection = document.getElementById('why-choose-us');
                whyChooseUsSection.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Why Choose Us
               </a>
              <a href="#">Careers</a>
              <a href="#">Clients</a>
            </div>
          </div>

          <div className="services-dropdown">
            <a href="#" className="dropdown-trigger">Services</a>
            <div className="dropdown-content">
              <a href="#">Application Development</a>
              <a href="#">Digital Marketing</a>
              <a href="#">E-Commerce</a>
              <a href="#">ERP Implementation</a>
              <a href="#">IT Consulting</a>
              <a href="#">Software Testing</a>
            </div>
          </div>


          
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

      {/* Background Video */}
      <video className="bg-video" autoPlay muted loop playsInline>
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Hero Content */}
      <div className='text cont'>
        <div className="hero-content">
          <span>Welcome to</span>
          <h1>Pravas IT Solutions</h1>
          <p>We are experienced professionals who understand that IT Services is changing, and are true partners who care about your success. Our team provides a consultative approach on emerging technology.</p>
          <h1>FOR SEAMLESS DIGITAL TRANSFORMATION.</h1>
          <button className="hero-button">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;