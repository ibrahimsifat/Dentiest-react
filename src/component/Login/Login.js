import React from 'react';
import { NavLink } from 'react-router-dom';
import Img from "../../img/login.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Googleicon from '../../img/google.png'
const Login = () => {
	const element = <FontAwesomeIcon icon={faCoffee} />



    return (
        <div>
          <div class=" container mx-auto my-32 mx-auto grid md:grid-cols-2  justify-center items-center">
		<div className='ml-auto mb-6'>
<img  className='px-4' src={Img} alt="" />
		</div>
	<div class="md:ml-12 ">
		<div class="bg-white flex justify-center items-center">
			<div>
				<div>
					<div>
						<span class="text-sm text-gray-900">Welcome back</span>
						<h1 class="text-2xl font-bold">Login to your account {element}</h1>
					</div>
						<div class="my-3">
							<label class="block text-md mb-2" for="email">Email</label>
							<input class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" placeholder="email"/>
        </div>
					<div class="mt-5">
						<label class="block text-md mb-2" for="password">Password</label>
						<input class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" placeholder="********"/>
        </div>
						
		<button 
		class="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">Login now</button>
							
				</div>
				<p className=' text-xl text-green-400 text-center'>-- or --</p>
				<div className='mt-4'>
					 <img className='w-12' src={Googleicon} alt="" /></div>


				<p class="mt-8"> Dont have an account? <NavLink class="cursor-pointer text-sm text-green-400" to='/signup'> Join today</NavLink></p>
			</div>
		</div>
	</div>
</div>
        </div>
    );
};

export default Login;