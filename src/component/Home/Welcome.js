import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../../img/logo.png";
import welcomeImg from "../../img/Welcome.jpg";
const Welcome = () => {
    return (
        <div>
            <section className="relative my-16  bg-blueGray-50">
<div className="items-end flex flex-wrap mx-4">
<div className="w-full md:flex flex-col items-end md:w-5/12 ml-auto mr-auto px-4">
    <div className="md:pr-12">
      <div className=" flex items-center  w-16 h-16 mb-6 rounded-full  mt-8">
        <img src={Logo} alt="" />
        <span className='ml-3 font-bold inline text-2xl'>DENTIST</span>
      </div>
      <h3 className="text-4xl font-bold">Welcome to Dentist
</h3>
      <p className="mt-4 text-md leading-relaxed text-gray-500">
      Dentist is a Responsive One Page WordPress Theme special crafted for dentist, dentist office. We have included all sections that a dental website need. Gallery (before&after), testimonials, doctors, office description, request form, contacts, services. All this stuff is fully editable, you can change colors, fonts, order, images, texts, and no coding skills is necessary. Dentist is built on luplis Framework with drag & drop page builder.
      </p>
    
        
        <NavLink to='/aboutus' className=" inline-block mt-5 p-1 px-3 bg-transparent border-2 border-green-400 text-green-400 text-lg rounded-lg transition-colors duration-500 transform hover:bg-green-400 hover:text-white focus:border-4 focus:border-green-300">Know More</NavLink>
    



    </div>
  </div>
  <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
    <img alt="..." className=" mt-10 " src={welcomeImg}/>
  </div>
  
</div>

</section>
        </div>
    );
};

export default Welcome;