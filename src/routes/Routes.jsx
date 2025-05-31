import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import About from "../pages/About";
import Contact from "../pages/Contact";


const router = createBrowserRouter([
 {
  path: '/',
  element: <App />,
  children: [
   {
    path: '/',
    element: <Home />
   },
   {
    path: '/login',
    element: <Login />
   },
   {
    path: '/signup',
    element: <SignUp />
   },
   {
    path: '/about',
    element: <About />
   },
   {
    path: '/contact',
    element: <Contact />
   }
  ]
 }
])

export default router;