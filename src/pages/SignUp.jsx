import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const SignUp = () => {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [registrationLoading, setRegistrationLoading] = useState(false);
 const {createUser} = useContext(AuthContext);

  const handleSignUp = async (e) => {
   console.log("Signup initiated with values:", { name, email, password });
    setRegistrationLoading(true)
    e.preventDefault();
    try {
      // register user after image been uploaded
      const res = await createUser(name, email, password)
      console.log(res)
      // if (res.email) {
      //   const modifiedUser = { name: res.displayName, email: res.email, photoURL: res.photoURL }
      //   console.log(modifiedUser)
      //   const dbResponse = await axios.post('users', modifiedUser)
      //   if (dbResponse.data.insertedId) {
      //     console.log("User info added to database.")
      //     Swal.fire({
      //       position: "center",
      //       icon: "success",
      //       title: "You've Successfully Registered.",
      //       showConfirmButton: false,
      //       footer: `Welcome ${res.displayName}`,
      //       timer: 2000
      //     });
      //   }
      //   console.log(dbResponse)
      // } else {
      //   Swal.fire({
      //     icon: "error",
      //     title: "Oops...",
      //     text: "Failed to Signup",
      //     footer: '<a href="#">Please try again later.</a>',
      //     timer: 2000
      //   });
      // }

    } catch (err) {
      console.log(err)
    } finally {
      console.log("Finally block in the register page executed...")
    }
  }
 return (
  <div className="hero min-h-screen bg-[#E3858030]">
   <div className="hero-content flex-col lg:flex-row max-w-5xl">
    <div className="text-center lg:text-left">
     <h1 className="text-5xl font-bold">Create Your Account</h1>
     <p className="py-6">
      Sign up to connect with potential matches and discover meaningful relationships on Ruh Mate. Your journey to finding your perfect partner starts here.
     </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
     <div className="card-body">
      <form onSubmit={handleSignUp} className="fieldset">
       <label className="label">Name</label>
       <input type="text" className="input focus:outline-none" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
       <label className="label">Email</label>
       <input type="email" className="input focus:outline-none" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
       <label className="label">Password</label>
       <input type="password" className="input focus:outline-none" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
       <div><a className="link link-hover">Forgot password?</a></div>
       <button className="btn btn-neutral mt-4">Register</button>
      </form>
      <div className="mt-4 text-center">
       <span>Already have an account? </span>
       <Link to="/login" className="link link-primary">Login</Link>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default SignUp;
