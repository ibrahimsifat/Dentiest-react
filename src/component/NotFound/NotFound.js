import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../img/products/notfoundpage.png';

const NotFound = () => {
    return (
        <div>
            <div class="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
        <div class="w-full md:w-1/2">
            <div class="mb-10 lg:mb-20">


<img src="'https://flipstore.withun.link/identity/Group%201.svg'" alt="" />
            </div>
            <div class="mb-10 md:mb-20 text-gray-600 font-light">
                <h1 class="font-black uppercase text-3xl lg:text-5xl text-indigo-700 mb-10">Sorry we couldn't find this page.</h1>
                <p>But dont worry, you can find plenty of other things on our homepage.</p>

            </div>
            <div class="mb-20 md:mb-0">
                <NavLink to='/' className="mt-4 mb-3 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition duration-100 hover:scale-110 text-white px-3 hover:text-white">Back to HomePage</NavLink>
            
            </div>
        </div>
        <div class="w-full md:w-1/2 text-center">
         
        <img src={img} class="md:w-80 mx-6" alt="" />
        </div>
    </div>
        </div>
    );
};

export default NotFound;