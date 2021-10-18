import React from 'react';
import { useHistory } from 'react-router';
import useAllProducts from '../Hooks/useAllProducts';
import DisplayAllProducts from './DisplayAllProducts';

const AllProduct = () => {
    const [products]=useAllProducts()
let history =useHistory()
const handleProductDetails=(id)=>{
    const url=`/allproductDetails/${id}`
history.push(url)
}

    return (
        <div className='container lg:grid-cols-3 my-16 grid md:grid-cols-2 mx-auto'>
        {
        products.map(product=><DisplayAllProducts
            key={product.id}
            product={product}
            handleProductDetails={handleProductDetails}
            ></DisplayAllProducts>)
        }
        </div>
    );
};

export default AllProduct;