import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import ContinueWithGoogle from "../components/ContinueWithGoogle";

const Login = () => {

 const [email, setEmail] = useState("")
 const [pass, setPass] = useState("")
 const [loginLoading, setLoginLoading] = useState(false)
 const { logIn } = useContext(AuthContext)
 const navigate = useNavigate()

 const handleLogin = async (e) => {
  setLoginLoading(true)
  e.preventDefault()
  console.log("Login initiated with values:", { email, pass });
  try {
   const response = await logIn(email, pass)
   console.log(response)
   if (response.email) {
    // Navigate to the home page after successful login
    navigate('/')
    // Show success alert
    Swal.fire({
     position: "center",
     icon: "success",
     title: "You've Successfully Logged In.",
     showConfirmButton: false,
     footer: `Welcome Back ${response.displayName.toUpperCase()}`,
     timer: 2000
    });
   } else {
    Swal.fire({
     icon: "error",
     title: "Oops...",
     text: "Failed to Sign in",
     footer: '<a href="#">Please try again later.</a>',
     timer: 2000
    });
   }
  } catch (err) {
   console.log(err)
  } finally {
   setLoginLoading(false)
   e.target.reset()
   console.log("finally block in the login component executed...")
  }
 }

 return (
  <div className="hero min-h-screen bg-[#E3858030]">
   <div className="hero-content flex-col lg:flex-row-reverse max-w-5xl">
    <div className="text-center lg:text-left">
     <h1 className="text-5xl font-bold">Welcome Back!</h1>
     <p className="py-6">
      Log in to connect with potential matches and discover meaningful relationships on Ruh Mate. Your journey to finding your perfect partner starts here.
     </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
     <div className="card-body">
      <form onSubmit={handleLogin} className="fieldset">
       <label className="label">Email</label>
       <input type="email" className="input focus:outline-none focus:ring-2 focus:ring-[#E38580]" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
       <label className="label">Password</label>
       <input type="password" className="input focus:outline-none focus:ring-2 focus:ring-[#E38580]" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
       <div><a className="link link-hover">Forgot password?</a></div>
       <button className="btn btn-neutral mt-4">Login</button>
      </form>
      <div className="divider my-2">or</div>
      {/* Google */}
      <ContinueWithGoogle setLoading={setLoginLoading} />
      <div className="mt-4 text-center">
       <span>Don't have an account? </span>
       <Link to="/signup" className="link link-primary">Sign up</Link>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Login;
