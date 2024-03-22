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
{/* <ol class="flex mt-10">
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
</ol> */}
<section >
    <div class="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for <br/>City Service company</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            {/* <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                
            </a>  */}
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/>
        </div>                
    </div>
</section>
    <div className='flex justify-center items-center h-full mb-6 gap-10 flex-wrap'>
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
