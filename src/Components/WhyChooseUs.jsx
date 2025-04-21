import React from 'react';
import ChooseUs from "../assets/whychoosewe.jpg";

 const WhyChooseUs = () => {
  return (
    <div className="bg-white py-5 px-4">
      <div className="container">
        <div className="row align-items-start g-4">
          
          {/* Right Section - Content */}
          <div className="col-lg-6 pt-4 pt-lg-0">
            <h5 className="text-success fw-semibold mb-2">Why Choose Us</h5>
            <h1 className="display-5 fw-bold text-dark mb-3">We Are Expert In</h1>
            <h4 className="fw-semibold text-dark mb-3">
              A Consultancy Firm Is A Business Of One Or More Experts That Provides Professional Services
            </h4>
            <p className="text-secondary mb-4">
              We provide professional and expert quality management consultancy to businesses across all sectors,
              and can tailor these services to suit your particular needs. We also provide consultancy on quality
              systems for specific sectors, including:
            </p>
            <ul className="list-unstyled fw-semibold">
              <li className="text-black d-flex align-items-center mb-2">
                <span className="text-success me-2">✔</span> Quality
              </li>
              <li className="text-black d-flex align-items-center mb-2">
                <span className="text-success me-2">✔</span> Commitment
              </li>
              <li className="text-black d-flex align-items-center mb-2">
                <span className="text-success me-2">✔</span> Success
              </li>
              <li className="text-black d-flex align-items-center mb-2">
                <span className="text-success me-2">✔</span> Achieves goals
              </li>
            </ul>
          </div>

          <div className="col-lg-4 position-relative">
            <img
              src={ChooseUs} // Replace with actual image path
              alt="Team working"
              className="img-fluid rounded shadow custom-img-width"
            />

            {/* Bottom blue box */}
            <div className="position-absolute bottom-0 start-0 translate-middle-y bg-primary bg-opacity-10 text-primary fw-semibold p-4 rounded shadow w-75">
              <p>
                Thinking Insights, Verified Driven Research, And Metrics Data Help You Make The Right Decisions!
              </p>
            </div>
          </div>

        </div>

        {/* Optional Floating Button */}
        <div className="position-fixed bottom-0 end-0 m-4">
          <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center shadow" style={{ width: '50px', height: '50px', cursor: 'pointer' }}>
            ↑
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;