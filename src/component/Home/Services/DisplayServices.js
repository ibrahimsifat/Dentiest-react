import React from 'react';
const DisplayServices = (props) => {
  const {img,title,description,id}=props.service
        
        const {handleServicesBtn}=props
    return (

        <div className="bg-card p-4 mx-3 rounded-xl md:w-80 card_hover">
          
          <img onClick='' className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src={img} alt="" />
     
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{title}</h2>
          <p className="leading-relaxed text-base">{description.slice(0,90)}</p>
          <button 
          onClick={()=>handleServicesBtn(id)}
          className=" mt-5 p-1 px-3 bg-transparent border-2 border-green-400 text-green-400 text-lg rounded-lg transition-colors duration-500 transform hover:bg-green-400 hover:text-white focus:border-4 focus:border-green-300">See Details</button>
    
        </div>
 
   
  
    );
};

export default DisplayServices;