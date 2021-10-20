// import  { useEffect, useState } from 'react';
// import { getStoredCart } from './fakedb';


// const UseCart = (products) => {
//     const [cart,setCart]=useState([])
   
// useEffect(()=>{
// const savecart=getStoredCart()
// if(products.length){
//     let stroedCart=[]
//     for(const productKey in savecart){
//         const addedProduct=products.find(product=>product.key===productKey)
//         if(addedProduct){
//             const productQuantity=savecart[productKey]
// addedProduct.quantity=productQuantity
// stroedCart.push(addedProduct)
//         }
//     }
//     setCart(stroedCart)
// }
// },[products])



//     return [cart,setCart]
// };

// export default UseCart;