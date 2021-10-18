import { faHeart,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';




const cart = <FontAwesomeIcon icon={faShoppingCart} />
const love=<FontAwesomeIcon icon={faHeart}/>

const DisplayAllProducts = (props) => {
    const {title,img,id}=props.product
    const {handleProductDetails}=props
    return (
     
      
           <div class="w-72 mx-auto my-8 ">  
            <div class="shadow hover:shadow-lg transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-pointer group">
                <div class="overflow-hidden relative">
               
                <img class="w-full transition duration-700 ease-in-out group-hover:opacity-60" src={img} alt="" />
                <div class="flex justify-center">
                    <div class="absolute bottom-4 transition duration-500 ease-in-out opacity-0 group-hover:opacity-100">
<button onClick={()=>handleProductDetails(id)} class="px-4 m-1 py-1 text-5xl  text-gray-400 transition duration-500 ease-in-out hover:text-green-300">
                          {cart}
                        </button>
                        <a href="/" class="px-4 m-1 py-1 text-5xl  text-gray-400 transition duration-500 ease-in-out hover:text-green-300">
                            {love}
                        </a>
                      
                    </div>
                </div>
            </div>
            <div class="px-4 py-3 bg-gray-100 card_hover">
                <a href="# d" class=""><h1 class="text-gray-800 font-semibold text-lg hover:text-green-400 transition duration-300 ease-in-out">{title}</h1></a>
                <div class="flex py-2">
                    <p class="mr-2 text-xs text-gray-600">$45.00</p>
                        <p class="mr-2 text-xs text-green-600 line-through">$15.00</p>
                </div>
                
            </div>
            </div>
       </div>
   

    );
};

export default DisplayAllProducts;