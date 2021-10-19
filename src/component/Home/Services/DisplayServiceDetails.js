import React from 'react';
import { NavLink } from 'react-router-dom';

const DisplayServiceDetails = (props) => {
const {title,price,description,img}=props.service;
    return (
        <div className='container mt-10 mx-auto px-8 md:px-16'>
           <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative">
                    <img src={img} className="w-full relative z-10" alt=""/>
                    <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
                <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5">{title}</h1>
                    <p className="text-sm text-gray-600">{description} </p>
                </div>
                <div>
                    <div className="inline-block align-bottom mr-5">
                        <span className="text-2xl leading-none align-baseline">$</span>
                        <span className="font-bold text-5xl leading-none align-baseline">{price}</span>
                        <span className="text-2xl leading-none align-baseline">.99</span>
                    </div>
                    <div className="inline-block align-bottom">
                     
                        <NavLink to='/booking' className="p-2 pl-5 pr-5 transition-colors duration-500 transform bg-green-400 hover:bg-green-600 text-gray-100 text-lg rounded-xl focus:border-4 border-green-400">Get Apartment</NavLink>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default DisplayServiceDetails;