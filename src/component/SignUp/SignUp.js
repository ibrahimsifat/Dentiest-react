import React from 'react';
import { NavLink } from 'react-router-dom';
import SignImg from '../../img/signup.jpg'
const SignUp = () => {

 
    return (
        <div className='w-9/12 mx-auto' > 
            
<div class="min-w-screen min-h-screen flex flex-col items-center justify-center px-5 py-5">
    <h1 className=' mb-8 text-red-700'>{'error'}</h1>
    <div class=" box-shadow rounded-3xl shadow-xl w-full overflow-hidden" >
        <div class="md:flex w-full items-center">
            <div class="hidden md:block w-1/2 bg-white-500 py-10 px-10">
          
          <img src={SignImg} alt="" />

           </div>
            <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div class="text-center mb-10">
                    <h1 class="font-bold text-3xl text-gray-900">REGISTER</h1>
                    <p>Enter your information to register</p>
                </div>
                <div>
                    <div class="flex -mx-3">
                        <div class="w-full px-1 mb-5">
                            <label for="" class="text-xs font-semibold px-1">your name</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input  type="text" class="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-red-500" placeholder="John"/>
                            </div>
                        </div>
                      
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-1 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Email</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input type="email" class="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-red-500" placeholder="youreail@example.com"/>
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-1 mb-12">
                            <label for="" class="text-xs font-semibold px-1">Password</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input  type="password" class="w-full -ml-10 pl-3 pr-1 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-red-500" placeholder="************"/>
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <button 
                          
                            class="block w-full max-w-xs mx-auto bg-green-400 hover:bg-green-500 focus:bg-green-500 text-white duration-500 rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>
                        </div>
                    </div>
                    <p className='pt-2'>Already Registered?
                        <NavLink className='text-red-500 pl-1 cursor-pointer text-sm' to="/login"> Sign In</NavLink>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default SignUp;