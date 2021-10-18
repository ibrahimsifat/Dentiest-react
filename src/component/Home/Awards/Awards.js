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
            
            <div class="mb-6 lg:mb-0">
              <h1 class="ml-5 md:ml-0 text-2xl md:text-5xl font-bold mb-2 text-gray-900">AWARDS & ASSOCIATIONS
</h1>
              <div class="ml-5 md:ml-0 h-1 md:w-80 w-40 bg-green-400 rounded"></div>
            </div>
            
          
            </div>
<div className="lg:grid-cols-4 my-16 grid md:grid-cols-3">

<img className='md:px-10 mx-auto w-72 my-8' src={Img1} alt="" />
<img  className='md:px-10 mx-auto w-72 my-8' src={Img2} alt="" />
<img  className='md:px-10 mx-auto w-72 my-8' src={Img3} alt="" />
<img  className='md:px-10 mx-auto w-72 my-8' src={Img4} alt="" />
</div>
         
            
        </div>
    );
};

export default Awards;