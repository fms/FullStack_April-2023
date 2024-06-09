/////// פוטר

import React from "react";
import logo from "../../Assets/Images/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="footer_line">
        <hr className="h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none" />
      </div>
      <div className="footer">
      <div className="flex items-center justify-around pt-4">
       

        
        <div>
          <img className="h-20" src={logo} alt="logo"></img>
        </div>
        <div>
          <p className="text-black text-sm font-inter no-underline normal-case">
            Copyright {year} final project by aviel Web & digital
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
