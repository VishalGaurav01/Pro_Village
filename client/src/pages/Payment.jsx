import React from 'react'
import { useLocation } from 'react-router-dom';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Payment(){
    const location = useLocation();
  const price = location.state ? location.state.price : 0;
  return (
    <div>
<ol class="flex mt-10">
    <li class="relative w-full mb-3 ml-96">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <span class="flex w-3 h-3 bg-blue-600 rounded-full"></span>
            </div>
            <div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3">
            <h3 class="font-medium text-gray-900 dark:text-white">Step 1</h3>
        </div>
    </li>

    <li class="relative w-full mb-3">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <span class="flex w-3 h-3 bg-blue-600 rounded-full"></span>
            </div>
            <div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3">
            <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
        </div>
    </li>
    <li class="relative w-full mb-3">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full ring-0 ring-white dark:bg-gray-700 sm:ring-8 dark:ring-gray-900 shrink-0">
                <span class="flex w-3 h-3 bg-gray-900 rounded-full dark:bg-gray-300"></span>
            </div>
        </div>
        <div class="mt-3">
            <h3 class="font-medium text-gray-900 dark:text-white">Step 3</h3>
        </div>
    </li>
</ol>
    <div className='flex justify-center items-center h-full my-10 gap-10 flex-wrap'>
    <form className="flex max-w-md flex-col gap-4 bg-gray-200 dark:border-gray-700 dark:bg-gray-800 p-10 w-full">
      <h1 className='text-2xl text-center '> Shopping Details </h1>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Enter Full Name" />
        </div>
        <TextInput id="email2" type="string" placeholder="your name" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Enter Pin Code" />
        </div>
        <TextInput id="password2" type="number" placeholder="pincode"  required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Enter Phone Number" />
        </div>
        <TextInput id="repeat-password" type="number" placeholder="+91"  required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Your email" />
        </div>
        <TextInput id="email2" type="email" placeholder="name@xyz.com" required shadow />
      </div>
    </form>
    <form className="flex max-w-md flex-col gap-4 bg-gray-200 dark:border-gray-700 dark:bg-gray-800 p-10 w-full">
    
      <div>
        <div className="mb-2 block">
          <Label htmlFor="large" value="Complete Address" />
        </div>
        <TextInput id="large" type="text" placeholder='address' sizing="lg" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Discount Coupon" />
        </div>
        <TextInput id="repeat-password" type="text" placeholder='#' shadow />
      </div>
      <div className="flex max-w-md flex-col gap-4">
      <Label htmlFor="disabledInput1">Total Price ($)</Label>
      <TextInput type="number" id="disabledInput1" placeholder={price} disabled />
    </div>
      <div className="flex items-center gap-2 my-3">
        <Checkbox id="agree" />
        <Label htmlFor="agree" className="flex">
          I agree with the&nbsp;
          <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
            terms and conditions
          </Link>
        </Label>
      </div>
      <Link to={'/'}>
      <Button type="submit">Place Order</Button>
    </Link>
    </form>
    </div>
    </div>
  );
}
