import React, { useState } from 'react'
// import ele1 from '../../Photos_coro'
import ProductCard from '../components/ProductCard.jsx'
export default function Projects() {
  const [num, setnum]= useState(0);
  return (
    <div>
    
<div class="flex items-center justify-center md:py-8 flex-wrap bg-gradient-to-b dark:from-blue-900 to-white from-teal-700 dark:to-[rgb(16,23,42)]">
    <button type="button" onClick={() => setnum(0)} class="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button>
    <button type="button" onClick={() => setnum(1)} class="text-gray-900 border border-gray-500 hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800 ">Electrical</button>
    <button type="button" onClick={() => setnum(2)} class="text-gray-900 border border-gray-500 hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Mechanical</button>
    <button type="button" onClick={() => setnum(3)} class="text-gray-900 border border-gray-500 hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Cleaning</button>
    <button type="button" onClick={() => setnum(4)} class="text-gray-900 border border-gray-500 hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Beauty</button>
    <button type="button" onClick={() => setnum(5)} class="text-gray-900 border border-gray-500 hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Carpentary</button>
    <button type="button" onClick={() => setnum(6)} class="text-gray-900 border border-gray-500 hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Plumbing</button>
</div>

    <div className='max-w-11xl mx-auto p-3 flex flex-col gap-8 pb-4 justify-center items-center'>
{(num===0) && (
<div class="grid grid-cols-2 md:grid-cols-3 gap-8">
        <div>
            <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"} price="$399" detail="This is a Amazing Product"/>
        </div>
        
        <div>
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"} price="$299" detail="This is a Amazing Product"/>

        </div>
        <div>
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"} price="$199" detail="This is a Amazing Product"/>

        </div>
        <div>
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"} price="$399" detail="This is a Amazing Product"/>

        </div>
        <div>
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"} price="$200" detail="This is a Amazing Product"/>

        </div>
        <div>
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"} price="$499" detail="This is a Amazing Product"/>

        </div>
        <div>
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"} price="$89" detail="This is a Amazing Product"/>

        </div>
        <div>
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
    </div>
)}
{(num===1) && (
<div class="grid grid-cols-2 md:grid-cols-3 gap-8">
        <div>
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"../../Photos_coro/ele1.jpg"} price="$300" detail="This is a Amazing Product"/>

            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/> */}
        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/> */}
            <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"../../Photos_coro/ele2.jpg"} price="$300" detail="This is a Amazing Product"/>
        </div>
        
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"../../Photos_coro/ele3.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"../../Photos_coro/ele4.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
    </div>
)}
{(num===2) && (
<div class="grid grid-cols-2 md:grid-cols-3 gap-8">
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/> */}
            <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"} price="$300" detail="This is a Amazing Product"/>
        </div>
        
        <div>
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"} price="$300" detail="This is a Amazing Product"/>

            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/> */}
        </div>
        
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
    </div>
)}
{(num===3) && (
<div class="grid grid-cols-2 md:grid-cols-3 gap-8">
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/> */}
            <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"} price="$300" detail="This is a Amazing Product"/>
        </div>
        
        <div>
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"} price="$300" detail="This is a Amazing Product"/>

            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/> */}
        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
    </div>
)}
{(num===4) && (
<div class="grid grid-cols-2 md:grid-cols-3 gap-8">
        <div> 
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/> */}
            <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"} price="$300" detail="This is a Amazing Product"/>
        </div>
        
        <div>
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"} price="$300" detail="This is a Amazing Product"/>

            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/> */}
        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
    </div>
)}
{(num===5) && (
<div class="grid grid-cols-2 md:grid-cols-3 gap-8">
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div> 
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/> */}
            <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"} price="$300" detail="This is a Amazing Product"/>
        </div>
        
        <div>
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"} price="$300" detail="This is a Amazing Product"/>

            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/> */}
        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
    </div>
)}
{(num===6) && (
<div class="grid grid-cols-2 md:grid-cols-3 gap-8">
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div> 
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/> */}
            <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"} price="$300" detail="This is a Amazing Product"/>
        </div>
        
        <div>
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"} price="$300" detail="This is a Amazing Product"/>

            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/> */}
        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
        <div>
            {/* <img class="max-h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/> */}
        <ProductCard class="max-h-auto max-w-40 rounded-lg" url={"https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"} price="$300" detail="This is a Amazing Product"/>

        </div>
    </div>
)}
</div>
</div>
);}