import React from 'react';
import { useParams } from 'react-router';
import useAllProducts from '../Hooks/useAllProducts';
import DisplayAllProductsDetails from './DisplayAllProductsDetails';

const AllProductsDetails = () => {
    const [products]=useAllProducts()
    const {productId}=useParams()
    const ID=parseInt(productId)
   const mached=products.filter(product=>product.id===ID)
 
    return (
        <div>
            {
                mached.map(item=><DisplayAllProductsDetails
                key={item.key}
                item={item}
                ></DisplayAllProductsDetails>)
            }
        </div>
    );
};

export default AllProductsDetails;