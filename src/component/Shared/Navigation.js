import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

import Logo from '../../img/logo.png'
const Navigation = () => {
  const {
    user,
    logOut
  }=useAuth()

    return (
        <div className="flex flex-wrap place-items-center ">
        <section className=" mx-auto">
          <nav className="flex justify-between container w-screen">
            <div className="px-5 xl:px-12 py-3 flex w-full items-center">
              <NavLink className="text-3xl font-bold font-heading" to="/">
                <img className="h-9 inline" src={Logo} alt="logo" /> <span className='font-bold text-xl'>DENTIST</span>
              </NavLink>
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
   <li><NavLink className=" hover:text-green-400 " to="/">Home</NavLink></li>
    <li><NavLink className=" hover:text-green-400 " to="/aboutus">About us</NavLink></li>
      <li><NavLink className=" hover:text-green-400 " to="/products">Products</NavLink></li>
      <li>
       {
         user.email? <button onClick={logOut} className=" hover:text-green-400 " >LogOut</button>
         :
         <NavLink className=" hover:text-green-400 " to="/login">Login</NavLink>
       }
        
     
                 
      </li>
              </ul>
              <div className="hidden xl:flex items-center space-x-5 items-center">
              {
                    user.email && <p className='text-green-400'><span className="font-bold text-green-500"> Hello </span>{user.displayName}</p>
                  }
          
                {user.photoURL?<img class="  w-12 h-12 mr-2 rounded-full" src={user.photoURL} alt="" />
                :
                <a className="flex items-center  hover:text-green-400 " href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  hover:text-green-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </a>}
              </div>
            </div>
            <a className="xl:hidden flex mr-6 items-center" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  hover:text-blue-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                </span>
              </span>
            </a>
            <a className="navbar-burger self-center mr-12 xl:hidden" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  hover:text-red-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </a>
          </nav>
        </section>
      </div>
    );
};

export default Navigation;