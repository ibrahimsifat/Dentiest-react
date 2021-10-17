import React from 'react';
const DisplayServices = (props) => {
  const {img,title,description}=props.service
        console.log(props);
    return (

        <div class="bg-card p-6 rounded-xl  card_hover">
          
          <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src={img} alt="" />
     
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{title}</h2>
          <p class="leading-relaxed text-base">{description.slice(0,100)}</p>
          <button class=" mt-5 p-1 px-3 bg-transparent border-2 border-green-400 text-green-400 text-lg rounded-lg transition-colors duration-500 transform hover:bg-green-400 hover:text-white focus:border-4 focus:border-green-300">Get Apartment</button>
    
        </div>
 
   
  
    );
};

export default DisplayServices;