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


        <section class="text-gray-600 body-font">
        <div class="container px-5 pt-16 mx-auto max-w-7x1">
          <div class="flex flex-wrap w-full mb-4 p-4">
            <div class="w-full mb-6 lg:mb-0">
              <h1 class="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">Our Services</h1>
              <div class="h-1 w-44 bg-green-400 rounded"></div>
            </div>
          </div>
         <div className="grid grid-cols-3 gap-8 md:mx-10">
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