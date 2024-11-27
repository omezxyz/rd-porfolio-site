import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faLinkedin, faBehance } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-800 text-white text-center">
      <p>&copy; 2024 RD RAVA ART. All rights reserved.</p>
      <div className="flex justify-center mt-4 space-x-6">
         
        <a href="https://www.instagram.com/rd_rava.art/profilecard/?igsh=bnJ1dm54dnZhM3Fq" className="hover:text-indigo-500">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/rdrava/" className="hover:text-indigo-500">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.behance.net/rd_rava" className="hover:text-indigo-500">
          <FontAwesomeIcon icon={faBehance} size="2x" />
        </a>
      </div>
      <div  className="flex justify-center mt-6 space-x-6"><a href="https://www.linkedin.com/in/omesh-rabha-414569259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Developed By Omesh Rabha</a>  </div>
      
    </footer>
  );
};

export default Footer;
