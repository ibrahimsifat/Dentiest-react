import React from 'react';
import Img1 from '../../../img/award/dentalia-demo-logo.jpg'
import Img2 from '../../../img/award/dentalia-demo-logo-2.jpg'
import Img3 from '../../../img/award/dentalia-demo-logo-3.jpg'
import Img4 from '../../../img/award/dentalia-demo-logo-4.jpg'
// const imgArr=[Img1,Img2,Img3,Img4]
const Awards = () => {
    return (
        <div className='container  mx-auto'>
            <div>
            
            <div className="mb-6 lg:mb-0">
              <h1 className="ml-5 md:ml-0 text-2xl md:text-4xl font-semibold mb-2 text-gray-900">AWARDS & ASSOCIATIONS
</h1>
              <div className="ml-5 md:ml-0 h-1 md:w-96 w-52 bg-green-400 rounded"></div>
            </div>
            
          
            </div>
<div className=" lg:grid-cols-4 my-16 grid md:grid-cols-3">

<img className='duration-500  zoom-image md:px-10 mx-auto w-72 my-8' src={Img1} alt="" />
<img  className='duration-500  zoom-image md:px-10 mx-auto w-72 my-8' src={Img2} alt="" />
<img  className=' duration-500  zoom-image md:px-10 mx-auto w-72 my-8' src={Img3} alt="" />
<img  className=' duration-500  zoom-image md:px-10 mx-auto w-72 my-8' src={Img4} alt="" />
</div>
         
            
        </div>
    );
};

export default Awards;