import React from "react";
import "./AboutScreen.css";
import img from "../assets/aboutscreen.png";


const AboutSection = () => {
  return (
    <div className="container py-5"  style={{maxWidth: "100%",}}>
      <div className="row align-items-center about-row">
        {/* Left Image */}
        <div className="col-md-5 mb-4 mb-md-0 d-flex justify-content-center ">
          <img
            src={img} 
            alt="Team working"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "90%", height: "90vh " }} // Decrease image size
          />
        </div>

        {/* Right Content */}
          <div className="col-md-7">
          <div className="about-text-box">
            <h2 className="mb-3" style={{ fontSize: "1.9rem" }}>
              <span className="text-secondary">About</span>{" "}
              <span className="text-success fw-bold">Pravas IT Solutions</span>
            </h2>
            <p className="text-muted mb-2" style={{ fontSize: "1.0rem" }}>
              Pravas IT Solutions is a customer–focused and technology–driven consulting
              firm dedicated to delivering excellence in IT consulting, staffing,
              product engineering, and enterprise application development services.
            </p>
            <p className="text-muted" style={{ fontSize: "1.0rem" }}>
             As an IT Services provider, we have been leveraging our software engineering expertise in delivering cost effective innovative solutions onshore and offshore in the areas of Web and Mobile Application Development, Software Customization, Integration, Maintenance and Support Services to our global clientele
            </p>

            {/* Features */}
            <div className="row mt-3">
              <div className="col-6 d-flex align-items-start">
                <div className="me-2">
                  <i className="bi bi-gear-fill fs-4 text-primary"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1" style={{ fontSize: "1.5rem",color:"black" }}>Best Services</h6>
                  <p className="mb-0 text-muted" style={{ fontSize: "0.9rem",color:"black" }}>We provide best IT services</p>
                </div>
              </div>
              <div className="col-6 d-flex align-items-start">
                <div className="me-2">
                  <i className="bi bi-headset fs-4 text-primary "></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1" style={{ fontSize: "1.5rem",color:"black" }}>24/7 Call Support</h6>
                  <p className="mb-0 text-muted" style={{ fontSize: "0.9rem" }}>We can take calls 24/7</p>
                </div>
              </div>
            </div>
          </div>
          </div>

      </div>
    </div>
  );
};

export default AboutSection;