import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const Home = () => {
 return (
  <div>
   <div className="flex-1">
    <img className="w-screen" src="../../public/images/Ruh Mate_ Connecting Hearts in Harmony-new.png" alt="" />
    <Banner />
   </div>
  </div>
 );
};

export default Home;