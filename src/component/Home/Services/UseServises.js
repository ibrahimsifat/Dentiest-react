import { useHistory } from 'react-router';
import useServicesProduct from '../../Hooks/useServicesProduct';
import DisplayServices from './DisplayServices';

const UseServises = () => {
  let history=useHistory()
  const [services]=useServicesProduct()




const handleServicesBtn=(id)=>{
  history.push(`/servicedetails/${id}`)
 
}

// console.log(services);
    return (


        <section className="text-gray-600 body-font">
        <div className="container px-5 pt-16 mx-auto max-w-7x1">
          <div className="flex flex-wrap w-full mb-4 p-4">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="ml-5 md:ml-0 text-2xl md:text-5xl font-semibold mb-2 text-gray-900">Our Services</h1>
              <div className="ml-5 md:ml-0 h-1 md:w-56 w-28 bg-green-400 rounded"></div>
            </div>
          </div>
         <div className="grid md:grid-cols-2 lg:grid-cols-3  lg:gap-10 md:gap-10 grid-col gap-8 md:mx-10">
         {
                services.map(service=><DisplayServices
                service={service}
                handleServicesBtn={handleServicesBtn}
                ></DisplayServices>)
            }
         </div>
        </div>
      </section>
        
    );
};

export default UseServises;