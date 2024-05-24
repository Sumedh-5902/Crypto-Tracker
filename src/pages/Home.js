import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { CryptoProvider } from "../context/CryptoContext";
import { TrendingProvider } from "../context/TrendingContext";
import { StorageProvider } from "../context/StorageContext";


// creating a the main home page 
const Home = () => {
  return (
    <CryptoProvider>
    <TrendingProvider>
    <StorageProvider>
      <main
      className="w-full h-full flex flex-col first first-letter:
    content-center items-center relative text-white font-nunito
    "
    >
      <div className="w-screen h-screen bg-gray-300 fixed -z-10" />

    {/* Adding Logo and Navigation functions on the Home Page */}
    <Logo />
    <Navigation />
      
      <Outlet />
    </main>
    </StorageProvider>
    </TrendingProvider>
    </CryptoProvider>

  );
};

export default Home;
