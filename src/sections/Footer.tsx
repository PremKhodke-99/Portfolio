import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <p className="text-xs text-center font-medium py-4 text-white bg-black border-t border-yellow-200">Made with ❣️ by Prem Khodke © {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
