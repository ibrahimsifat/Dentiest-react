import React from 'react';
import { NavLink } from 'react-router-dom';

const BookAppointment = () => {
    return (
        <div>
            <div>
  
     <h1 className='text-center py-8 text-3xl text-green-400 font-semibold'>Book an Appointment</h1>

      <div className="bg-white md:flex flex-col  md:ml-44 sm:ml-12 p-4 px-4 md:p-8 mb-6">
          <div className="text-gray-600 text-left mb-10">
            <p className="font-medium text-lg">Personal Details</p>
            <p>Please fill out all the fields.</p>
          </div>
        <div className="grid justify-center items-center  gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">

          <div className="lg:col-span-2">
            <from className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-5">
                <label htmlFor="full_name">Full Name</label>
                <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" required />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="email">Email Address</label>
                <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="email@domain.com"required />
              </div>

              <div className="md:col-span-3">
                <label htmlFor="address">Address / Street</label>
                <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" required/>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" required/>
              </div>
              <div className="md:col-span-5">
                <div className="inline-flex items-center">
                  <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" />
                  <label htmlFor="billing_same" className="ml-2">My billing address is different than above.</label>
                </div>
              </div>

              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                <NavLink to='/payment' className=" ml-5 md:ml-0 mt-4 mb-3 w-full  px-5 bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">Payment</NavLink>
                </div>
              </div>

            </from>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default BookAppointment;