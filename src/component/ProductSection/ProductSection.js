import React from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAllProducts from '../Hooks/useAllProducts';
import DisplayProductSection from './DisplayProductSection';

const ProductSection = () => {
    const [products]=useAllProducts()
const sliceProdcuts= products.slice(0,3)

let history =useHistory()
const handleProductDetails=(id)=>{
    const url=`/allproductDetails/${id}`
history.push(url)
}

    return (
        <div className='container my-24 mx-auto '>
            <div class=" md:flex flex-wrap w-full mb-4 p-4 justify-between">
            <div class="mb-6 lg:mb-0">
              <h1 class="ml-5 md:ml-0 text-2xl md:text-5xl font-semibold mb-2 text-gray-900">Our Products</h1>
              <div class="ml-5 md:ml-0 h-1 md:w-60 w-28 bg-green-400 rounded"></div>
            </div>
            <div className="right">
            <NavLink to='/products' class=" ml-5 md:ml-0 mt-4 mb-3 w-full md:mr-20 px-5 bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">See More</NavLink>
            </div>
          </div>
           <div className=' container lg:grid-cols-3 my-4 grid md:grid-cols-2 mx-auto'>
           {
                sliceProdcuts.map(sliceProdcut=><DisplayProductSection
                key={sliceProdcut.id}
                sliceProdcut={sliceProdcut}
                handleProductDetails={handleProductDetails}
                ></DisplayProductSection>)
            }
           </div>
        </div>
    );
};

export default ProductSection;