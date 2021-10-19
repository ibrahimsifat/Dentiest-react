import React from 'react';
import { NavLink } from 'react-router-dom';

const BookAppointment = () => {
    return (
        <div>
            <div>
  
     

      <div class="bg-white md:flex flex-col  md:ml-44 sm:ml-12 p-4 px-4 md:p-8 mb-6">
          <div class="text-gray-600 text-left mb-10">
            <p class="font-medium text-lg">Personal Details</p>
            <p>Please fill out all the fields.</p>
          </div>
        <div class="grid justify-center items-center  gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">

          <div class="lg:col-span-2">
            <from class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div class="md:col-span-5">
                <label for="full_name">Full Name</label>
                <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" required />
              </div>

              <div class="md:col-span-5">
                <label for="email">Email Address</label>
                <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="email@domain.com"required />
              </div>

              <div class="md:col-span-3">
                <label for="address">Address / Street</label>
                <input type="text" name="address" id="address" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" required/>
              </div>

              <div class="md:col-span-2">
                <label for="city">City</label>
                <input type="text" name="city" id="city" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" required/>
              </div>
              <div class="md:col-span-5">
                <div class="inline-flex items-center">
                  <input type="checkbox" name="billing_same" id="billing_same" class="form-checkbox" />
                  <label for="billing_same" class="ml-2">My billing address is different than above.</label>
                </div>
              </div>

              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end">
                <NavLink to='/payment' class=" ml-5 md:ml-0 mt-4 mb-3 w-full  px-5 bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">Payment</NavLink>
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