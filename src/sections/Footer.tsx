import React from "react";

const Footer = () => {
  return (
    <div>
      <p className="text-xs text-center font-medium py-2 text-white bg-black border-t border-yellow-200">Made with ❣️ by Prem Khodke © {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
