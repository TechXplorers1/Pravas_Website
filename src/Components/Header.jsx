import React from "react";
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
// import logo from "../assets/logo.png"; // Replace with your actual logo path

function Header() {
  return (
    <div>
      {/* Top Contact Bar */}
      <div style={{ backgroundColor: "#0e0b1b", color: "white", display: "flex", justifyContent: "space-between", padding: "8px 40px", fontSize: "14px" }}>
        <div style={{ display: "flex", gap: "20px" }}>
          <span><FaEnvelope style={{ marginRight: "5px" }} /> pravas.in</span>
          <span><FaPhoneAlt style={{ marginRight: "5px" }} /> 080 0000 0000</span>
        </div>
        <div style={{ display: "flex", gap: "15px" }}>
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
      </div>

      
    </div>
  );
}

export default Header;
