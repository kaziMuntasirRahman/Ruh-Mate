import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
 const { user, loading } = useContext(AuthContext);
 return (
  <nav>
   <div className="navbar bg-gray-100 shadow-sm px-5 md:px-20 lg:px-52">
    <div className="navbar-start">
     <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
       tabIndex={0}
       className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li><Link to="/">Home</Link></li>
       <li>
        <a>Matches</a>
        <ul className="p-2">
         <li><Link to="/search">Search</Link></li>
         <li><Link to="/recommended">Recommended</Link></li>
        </ul>
       </li>
       <li><Link to="/about">About Us</Link></li>
       <li><Link to="/contact">Contact</Link></li>
      </ul>
     </div>
     <Link to='/' className=" flex flex-col justify-center"><img className="h-8 object-contain" src="images/Ruh_Mate_Logo_rectangle-removebg-preview.png" /></Link>
    </div>
    <div className="navbar-center hidden lg:flex">
     <ul className="menu menu-horizontal px-1">
      <li><Link to="/">Home</Link></li>
      <li>
       <details>
        <summary>Matches</summary>
        <ul className="p-2">
         <li><Link to="/search">Search</Link></li>
         <li><Link to="/recommended">Recommended</Link></li>
        </ul>
       </details>
      </li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/contact">Contact</Link></li>
     </ul>
    </div>
    <div className="navbar-end">
     {
      user?.email ? (
       <div className="dropdown dropdown-hover dropdown-end">
        <img tabIndex={0} role="button" className="size-12" src="https://cdn-icons-png.flaticon.com/512/6998/6998080.png" alt={user.displayName} />
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
         <li><a>{user.displayName || ""}</a></li>
        </ul>
       </div>
      ) : (
       <Link to="/login" className="btn bg-[#E38580] text-white" disabled={loading}>
        {loading ? (
         <span className="loading loading-spinner loading-sm"></span>
        ) : (
         "Login"
        )}
       </Link>
      )
     }
    </div>
   </div>
  </nav>
 );
};

export default Navbar;