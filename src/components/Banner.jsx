import React from "react";
const Banner = () => {
 return (
  <div
   className="hero min-h-[70vh] "
   style={{
    backgroundImage:
     "url('images/wedding-horizontal-web-banner-elegant-marriage-invitation-with-abstract-white-flowers-with-green-leaves-in-golden-border-illustration-for-header-website-cover-templates-in-modern-design-vector.jpg')",
   }}
  >
   <div className="hero-overlay"></div>
   <div className="hero-content text-neutral-content text-center">
    <div className="max-w-2xl">
     <h1 className="mb-5 text-5xl font-bold">Welcome to Ruh-Mate</h1>
     <p className="mb-5">
      Discover your perfect life partner with ease and confidence. Join our trusted matrimony community to connect, chat, and find your soulmate today!
     </p>
     <button className="btn btn-primary">Get Started</button>
    </div>
   </div>
  </div>
 );
};

export default Banner;
