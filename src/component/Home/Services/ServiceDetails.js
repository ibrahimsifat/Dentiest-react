import { useParams } from 'react-router';
import useServicesProduct from '../../Hooks/useServicesProduct';
import DisplayServiceDetails from './DisplayServiceDetails';

const ServiceDetails = () => {
  

let {serviceId}=useParams()
const itemId=parseInt(serviceId)
    const [services]=useServicesProduct()
    const mached=services.filter(item=>item.id===itemId)


    return (
        <div>
         {
         mached.map(service=><DisplayServiceDetails
         key={service.id}
         service={service}
         ></DisplayServiceDetails>)
         }
        </div>
    );
};

export default ServiceDetails;