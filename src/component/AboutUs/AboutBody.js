import React from 'react';
import { NavLink } from 'react-router-dom';


import DentistImg from '../../img/dant/dent1.jpg'
import DentistImg2 from '../../img/dant/dent2.jpg'
import DentistImg3 from '../../img/dant/dent3.jpg'
import DentistImg4  from '../../img/dant/dent4.jpg'

const AboutBody = () => {
    return (
        <div className='container mx-auto my-16'>
            <div className='mb-14'>
            <h1 className="ml-5 md:ml-0 text-2xl md:text-5xl font-semibold mb-2 text-gray-900">Meet Our Doctors</h1>
              <div className="ml-5 md:ml-0 h-1 md:w-72 w-28 bg-green-400 rounded"></div>
            </div>
          <div >

<div className=' grid md:grid-cols-2 lg:grid-cols-4  lg:gap-10 md:gap-10 grid-col gap-8 md:mx-10 mx-auto'>
<Expart img={DentistImg} name={'Mr.Ranga'} job={'RadioGraphis Expert'}></Expart>
<Expart img={DentistImg2} job={'Veneer Expert'} name={'Sara Jackson'}></Expart>
<Expart img={DentistImg3} job={'MouthGrards Expert'} name={'Diana Wagner'}></Expart>
<Expart job={'Cleaning Expart' } img={DentistImg4} name={'Doris Jordan '}></Expart>

</div>

<form className="mt-32 -mb-16 flex w-8/12 mx-auto">
    	<input className=" w-full focus:outline-none focus:ring-2 p-2 focus:ring-green-500 focus:border-transparent rounded-l-lg md:p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="your@mail.com"/>
		<button className="px-8 rounded-r-lg bg-green-400  text-gray-100 font-bold md:p-4 p-2 uppercase border-green-500 hover:bg-green-700 duration-500 border-t border-b border-r">Subscribe</button>
	</form>
</div>
        </div>
    );
};
const Expart=(props)=>{
    const {img,name,job}=props
    return(
       <div>

<div>
<div className="w-64 bg-white rounded-xl overflow-hidden  hover:shadow-xl hover:scale-102 duration-500 transform transition cursor-pointer mx-auto">
    <img src={img} alt=""/>
    <div className="p-5">
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="mt-2 mb-6 text-lg font-semibold text-gray-600">{job}</p>
      
      <NavLink to='/booking' className="  mt-5 p-1 px-3 bg-transparent border-2 border-green-400 text-green-400 text-lg rounded-lg transition-colors duration-500 transform hover:bg-green-400 hover:text-white focus:border-4 focus:border-green-300">Get Apartment</NavLink>
    </div>
  </div>
</div>
       </div>
    )
}

export default AboutBody;