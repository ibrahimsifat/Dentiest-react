import React from 'react';
import { NavLink } from 'react-router-dom';
import CEOImg from "../../img/appoinment_man.png";

const CeoPart = () => {
    return (
        <div>
              <section className="container mx-auto my-16  bg-blueGray-50">
<div className="items-end flex flex-wrap mx-4">
<div className="w-full md:flex flex-col items-center md:w-7/12 ml-auto mr-auto px-4">
    <div className="md:pr-12">
      <div className=" flex items-center  mb-3 rounded-full  ">
       
       <div>
       <p className='font-bold  text-2xl text-green-400 '>Ibrahim Sifat</p>
        <p className='ml-3 text-gray-600  text-md '>Ceo & Co-Founder of Dentist</p>
       </div>
      </div>
      <h3 className=" ml-3 text-2xl md:text-4xl my-8 font-semibold">
      We are proud to have the opportunity to give you the <span className='font-bold text-green-400'>smile of your dreams.</span>
</h3>
    
    
        
        <NavLink to='/aboutus' className=" mt-5 p-1 px-3 bg-transparent border-2 border-green-400 text-green-400 text-lg rounded-lg transition-colors duration-500 transform hover:bg-green-400 hover:text-white focus:border-4 focus:border-green-300">More</NavLink>
    



    </div>
  </div>
  <div className="w-full flex justify-center items-center md:w-5/12  px-4">
    <img alt="..." className="mr-auto mt-10" src={CEOImg}/>
  </div>
  
</div>

</section>
        </div>
    );
};

export default CeoPart;