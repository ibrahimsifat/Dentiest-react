import { useEffect, useState } from 'react';

const useAllProducts = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const url='../Product.json'
        fetch(url)
        .then(res =>res.json())
        .then(data=>setProducts(data))

    },[])
    return [products]
};

export default useAllProducts;