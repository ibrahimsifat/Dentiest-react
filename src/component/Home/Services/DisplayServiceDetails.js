import React from 'react';

const DisplayServiceDetails = (props) => {
const {title,price,description,img}=props.service;
    return (
        <div className='container mt-10 mx-auto px-8 md:px-16'>
           <div class="md:flex items-center -mx-10">
            <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div class="relative">
                    <img src={img} class="w-full relative z-10" alt=""/>
                    <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
            <div class="w-full md:w-1/2 px-10">
                <div class="mb-10">
                    <h1 class="font-bold uppercase text-2xl mb-5">{title}</h1>
                    <p class="text-sm">{description} <a href="#g" class="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900">MORE <i class="mdi mdi-arrow-right"></i></a></p>
                </div>
                <div>
                    <div class="inline-block align-bottom mr-5">
                        <span class="text-2xl leading-none align-baseline">$</span>
                        <span class="font-bold text-5xl leading-none align-baseline">{price}</span>
                        <span class="text-2xl leading-none align-baseline">.99</span>
                    </div>
                    <div class="inline-block align-bottom">
                        <button class="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i class="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default DisplayServiceDetails;