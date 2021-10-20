import React from 'react';
import { NavLink } from 'react-router-dom';
import FooterLogo from '../../img/logo.png'
const Footer = () => {
    return (
        <div className='mt-auto -block'>
              <div className='mb-3' >
  <form className="mt-32  flex w-8/12 mx-auto">
    	<input className=" w-full focus:outline-none focus:ring-2 p-2 focus:ring-green-500 focus:border-transparent rounded-l-lg md:p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="your@mail.com"/>
		<button className="px-8 rounded-r-lg bg-green-400  text-gray-100 font-bold md:p-4 p-2 uppercase border-green-500 hover:bg-green-700 duration-500 border-t border-b border-r">Subscribe</button>
	</form>
  </div>
<footer className="relative text-white bg-gray-900 pt-8 pb-6">

  <div className="container mx-auto px-4">
    <div className="md:flex flex-wrap text-center justify-between lg:text-left">
    <div className=" flex items-center  w-16 h-16 mb-6 rounded-full  mt-8">
        <img src={FooterLogo} alt="" />
        <span className='ml-3 font-bold inline text-2xl'>DENTIST</span>
      </div>
      <div className="w-full lg:w-6/12 px-4 ">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full md:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-blueGray-500 text-md font-semibold mb-2">Useful Links</span>
            <ul className="list-unstyled">
              <li>
                <NavLink className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-red-500 duration-500" to="">About Us</NavLink>
              </li>
              <li>
              <NavLink className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-red-500 duration-500" to="">Blog</NavLink>
              </li>
              <li>
              <NavLink className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-red-500 duration-500" to="">Github</NavLink>
              </li>
              <li>
              <NavLink className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-red-500 duration-500" to="">Product</NavLink>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase text-blueGray-500 text-md font-semibold mb-2">Other Resources</span>
            <ul className="list-unstyled">
              <li>
              <NavLink className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-red-500 duration-500" to="">MIT License</NavLink>
              </li>
              <li>
              <NavLink className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-red-500 duration-500" to="">Terms &amp; Conditions</NavLink>
              </li>
              <li>
              <NavLink className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-red-500 duration-500" to="">Privacy Policy</NavLink>
              </li>
              <li>
              <NavLink className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-red-500 duration-500" to="">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          <span>Copyright © </span>
          <span id="get-current-year">2021</span>
         
          <NavLink to=''>Ibrahim Sifat</NavLink>.
        </div>
      </div>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;