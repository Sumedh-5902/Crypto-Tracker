import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/logo.svg";

// creating a file for logo input

const Logo = () => {
  return (
    <div>
      <Link
        to="/"
        className="
     absolute left-2.5 top-2.5 h-16 w-16 [text-decoration: none]
     text-lg text-yellow flex items-center
     "
      >
        {/* Adding of image pixel and animation */}
        <img
          className=" h-32 w-24 animate-spin-slow"
          src={logoSvg}
          alt="Crypto Tracker"
        />
        <span className="mx-1.5">CryptoTracker</span>
        {/* Heading */}
      </Link>

      <Link
        to="/login"
        className="
     absolute right-2 top-2.5 h-16 w-30 [text-decoration: none]
     text-lg text-yellow flex items-center
     "
      >
        {/* Adding of image pixel and animation */}
        <span className="mx-1.5">Login | Register</span>
        {/* Heading */}
      </Link>
    </div>
  );
};

export default Logo;
