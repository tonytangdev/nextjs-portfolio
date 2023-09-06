import React from "react";
import TonyDevLogo from "../../../public/TonyDevLogo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer w-full border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white m-auto">
      <div className="container m-auto p-12 flex justify-between items-center">
        <Image src={TonyDevLogo} alt="logo" />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
