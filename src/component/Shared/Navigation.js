
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

import profileIcon from '../../img/products/pngegg.png'
import Logo from '../../img/logo.png'

  const Navigation =()=>{ 
  const {
        user,
        logOut
      }=useAuth()
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full items-center flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                     <NavLink className="text-3xl  font-bold font-heading" to="/">
              <img className="h-9 inline mb-2" src={Logo} alt="logo" /> <span className='font-bold text-xl mb-6 inline-block md:mr-32  '>DENTIST</span>
         </NavLink>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  hover:text-red-500 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>

            </button>
          </div>
          <div className={
              "lg:flex flex-grow justify-between items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="duration-300 mabber md:bg-white bg-gray-200  block w-full text-center mx-auto md:flex flex-col lg:flex-row list-none lg:ml-auto 
            mx-auto font-semibold ">
           
   <li><NavLink className=" hover:text-green-400 " to="/">Home</NavLink></li>
    <li><NavLink className=" hover:text-green-400 " to="/aboutus">About us</NavLink></li>
      <li><NavLink className=" hover:text-green-400 " to="/products">Products</NavLink></li>
      <li><NavLink className=" hover:text-green-400 " to="/booking">Book Appointment</NavLink></li>
      <li>
       {
         user.email? <button onClick={logOut} className="text-green-400 font-bold  hover:text-green-600 " >LogOut</button>
         :
         <NavLink className=" hover:text-green-400 " to="/login">Login</NavLink>
       }
        
     
                 
      </li>
                
              <ul className='ml-auto'>
              <li  >
                 {
                    user.email && <p className='text-green-400 '><span className="font-bold text-green-500"> Hello </span>{user.displayName}</p>
                  }
                 </li>
          
               <li className="md:ml-32 mx-auto hover:text-green-400 ">{
                user.photoURL?
                <img src={user.photoURL} className='mx-auto w-10 rounded-full' alt="" />
                :
                <img src={profileIcon} className='mx-auto w-8 mb-4' alt="" />
              
               }
                </li>
              
              </ul>

             <li className>
             <NavLink to='cart' className=" flex md:mr-6 justify-center items-center" >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  hover:text-blue-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                </span>
              </span>
            </NavLink>
             </li>
           
              </ul>
          </div>
        </div>
      </nav>
    </>
  );
}



export default Navigation;