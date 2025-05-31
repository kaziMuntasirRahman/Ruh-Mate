import React from "react";

const primaryColor = "#E38580";

const About = () => {
 return (
  <div
   className="max-w-3xl mx-auto my-12 p-8 rounded-2xl shadow-2xl"
   style={{
    background: "linear-gradient(135deg, #fff 60%, #fdecea 100%)",
    border: `2px solid ${primaryColor}`,
   }}
  >
   <h1
    className="text-4xl font-extrabold mb-5 tracking-tight"
    style={{ color: primaryColor }}
   >
    About RuhMate
   </h1>
   <p className="text-lg leading-relaxed text-gray-700 mb-6">
    <strong style={{ color: primaryColor }}>RuhMate</strong> is a modern matrimony platform dedicated to helping individuals find their perfect life partners. We believe that every soul deserves a meaningful connection, and our mission is to make the journey of finding a soulmate simple, safe, and fulfilling.
   </p>
   <h2
    className="text-2xl mt-8 mb-3 font-semibold"
    style={{ color: primaryColor }}
   >
    Our Vision
   </h2>
   <p className="text-base text-gray-600 mb-6">
    To create a trusted and inclusive community where genuine relationships blossom, and every member feels valued and respected.
   </p>
   <h2
    className="text-2xl mt-8 mb-3 font-semibold"
    style={{ color: primaryColor }}
   >
    Why Choose RuhMate?
   </h2>
   <ul className="list-disc text-base text-gray-700 pl-8 space-y-2 mb-6">
    <li>
     <span style={{ color: primaryColor, fontWeight: 600 }}>✔</span> Verified profiles for a safe and secure experience
    </li>
    <li>
     <span style={{ color: primaryColor, fontWeight: 600 }}>✔</span> Advanced matching algorithms to connect compatible partners
    </li>
    <li>
     <span style={{ color: primaryColor, fontWeight: 600 }}>✔</span> User-friendly interface for easy navigation
    </li>
    <li>
     <span style={{ color: primaryColor, fontWeight: 600 }}>✔</span> Privacy-focused features to protect your information
    </li>
    <li>
     <span style={{ color: primaryColor, fontWeight: 600 }}>✔</span> Dedicated support team to assist you at every step
    </li>
   </ul>
   <h2
    className="text-2xl mt-8 mb-3 font-semibold"
    style={{ color: primaryColor }}
   >
    Join Us
   </h2>
   <p className="text-base text-gray-600 mb-8">
    Whether you are searching for your soulmate or helping a loved one find theirs, RuhMate is here to guide you. Start your journey with us and discover meaningful connections that last a lifetime.
   </p>
   <div className="mt-8 text-center">
    <a
     href="/signup"
     className="px-10 py-4 rounded-full font-bold text-lg shadow-lg transition transform hover:scale-105"
     style={{
      background: primaryColor,
      color: "#fff",
      boxShadow: `0 4px 20px 0 ${primaryColor}55`,
      border: `2px solid ${primaryColor}`,
     }}
    >
     Get Started
    </a>
   </div>
  </div>
 );
};

export default About;
