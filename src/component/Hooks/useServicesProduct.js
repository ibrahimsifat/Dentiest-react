import { useEffect, useState } from 'react';

const useServicesProduct = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        const url='../Fakedb.json'
        fetch(url)
        .then(res =>res.json())
        .then(data=>setServices(data))

    },[])
    return [services]
};

export default useServicesProduct;