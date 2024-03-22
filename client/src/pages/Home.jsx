import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react';
import PostCard from '../components/PostCard';
// import CalltoAction from '../components/CalltoAction.jsx'
import CateCards from '../components/CateCards.jsx';
// import ProductCard from '../components/ProductCard.jsx';
import Corousal from '../components/Corousal.jsx'
import { Modal,Button} from 'flowbite-react';
import Upcoming from '../components/Upcoming.jsx';
import pagea7 from '../../Photos_coro/pagea7.jpg'
import CalltoAction from '../components/CalltoAction.jsx'
import MyComponent from '../components/Buttons.jsx';
// import Coro2 from '../components/Coro2.jsx';
// import TextTyping from '../components/Text.jsx';
export default function Home() {
  const val="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg"
const val1="https://st2.depositphotos.com/1718692/7425/i/450/depositphotos_74257459-stock-photo-lake-near-the-mountain-in.jpg"
const com="https://miro.medium.com/v2/resize:fit:854/0*dd0d7pHDglr_z6-D"
const man="https://www.shutterstock.com/image-photo/aerial-view-construction-worker-site-600nw-1006180303.jpg" 
const [posts, setPosts] = useState([]);
  const [modal, setmodal] = useState(null);
  const [mode, setmode] = useState(null);
  const [mode1, setmode1] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts?limit=4');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  // const text = 'Pro Village';
  // let index = 0;
  // const typingText = document.getElementById('typing-text');
  
  // function typeCharacters() {
  //   typingText.textContent = text.slice(0, index);
  //   index = (index + 1) % (text.length + 1);
  // }
  
  // setInterval(typeCharacters, 10);

  return (
    <div>
      {/* <div className=' mb-3 border rounded-lg border-teal-500 dark:border-slate-700 w-full max-h-full'>
      <Corousal/>
      </div> */}
      <div className='w-full h-full bg-gradient-to-b dark:from-[rgb(8,46,77)] to-white from-teal-700 dark:to-[rgb(16,23,42)]'>
      {/* <div className=' flex flex-col gap-6 p-20 mb-10  px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to
        <span className='px-2 ml-1 py-1 lg:text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg dark:text-white text-gray-700'>
              City
        </span>Service</h1>
        <p className=' text-xs  sm:text-sm '>
        An online platform that connected service professionals such as plumbers, 
        electricians, beauticians, and others with customers in need of those services.
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm font-bold hover:underline'>
          View all Profiles 
        </Link>
      </div> */}
      <section >
    <div class="grid max-w-screen-xl px-4 my-0 mx-auto lg:gap-8 xl:gap-20 lg:py-8 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-3xl mb-6 text-4xl font-extrabold text-white tracking-tight leading-none md:text-5xl xl:text-6xl ">Welcome to City Service</h1>
            <p class="max-w-2xl  mb-2 font-light text-white lg:mb-8 md:text-lg lg:text-xl ">An online platform that connected service professionals such as plumbers, 
        electricians, beauticians, and others with customers in need of those services.</p>
            {/* <a href="/search" class="inline-flex items-center justify-center px-5 py-3 mr-4 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="/shop" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-teal-500 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Shop Now
            </a>  */}
            <MyComponent/>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"  className="h-80 cursor-pointer hover:scale-105 transition-transform duration-100"/>
        </div>                
    </div>
</section>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-4">
  <div class="flex justify-center items-center h-full">
    <div class="w-full max-w-sm p-4 border bg-white dark:bg-[rgb(16,23,42)] border-gray-200 rounded-lg shadow sm:p-6 md:p-6 dark:border-gray-700">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white pb-3">Categories to Explore</h5>
    <div class="grid grid-cols-2 gap-2">
  <div className='h-44 overflow-hidden rounded-lg'>
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" src="../../Photos_coro/mplum.jpg" alt=""/>
  </div>
  <div className='h-44 overflow-hidden rounded-lg'>
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" src="../../Photos_coro/melec.jpg" alt=""/>
  </div>
  <div className='h-44 overflow-hidden rounded-lg'>
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" src="../../Photos_coro/mcle.jpg" alt=""/>
  </div>
  <div className='h-44 overflow-hidden rounded-lg'>
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" src="../../Photos_coro/mmech.jpg" alt=""/>
  </div>
</div>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300 p-3">
          <a href="/shop" class="text-blue-700 hover:underline dark:text-blue-500">View More</a>
        </div>
    </div>
</div>
<div class="flex justify-center items-center h-full">
  <div class="w-full max-w-sm p-4 border bg-gray-100 dark:bg-[rgb(16,23,42)]  rounded-lg shadow sm:p-6 md:p-6 dark:border-gray-700">
    <h5 class="text-xl font-medium text-gray-900 dark:text-white pb-3">Keep Searching for</h5>

    <div class="grid grid-cols-2 gap-2">
  <div className='h-44 overflow-hidden rounded-lg'>
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" 
    src="../../Photos_coro/abea9.jpg" alt=""/>
  </div>
  <div className='h-44 overflow-hidden rounded-lg'>
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" 
    src="../../Photos_coro/acle7.jpg" alt=""/>
  </div>
  <div className='h-44 overflow-hidden rounded-lg'>
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" 
    src="../../Photos_coro/epro4.jpg" alt=""/>
  </div>
  <div className='h-44 overflow-hidden rounded-lg'>
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" 
    src="../../Photos_coro/acar2.jpg" alt=""/>
  </div>
</div>

    <div class="text-sm font-medium text-gray-500 dark:text-gray-300 p-3">
      <a href="/shop" class="text-blue-700 hover:underline dark:text-blue-500">View More</a>
    </div>
  </div>
</div>

<div class="relative flex justify-center items-center h-full">
  <div class="w-full max-w-sm p-4 border  bg-gray-100 dark:bg-[rgb(16,23,42)] border-gray-200 rounded-lg shadow sm:p-6 md:p-6 dark:border-gray-700">
    <h5 class="text-xl font-medium text-gray-900 dark:text-white pb-3"> Up to 60% off</h5>

    <div class="grid grid-cols-2 gap-2">
  <div className='h-44 overflow-hidden rounded-lg'>
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" src="../../Photos_coro/amech3.webp" alt=""/>
  </div>
  <div className='h-44 overflow-hidden rounded-lg'>
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" src="../../Photos_coro/acle5.jpg" alt=""/>
  </div>
  <div className='h-44 overflow-hidden rounded-lg'>
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" src="../../Photos_coro/acle3.webp" alt=""/>
  </div>
  <div className='h-44 overflow-hidden rounded-lg'>
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" src="../../Photos_coro/aplum2.jpg" alt=""/>
  </div>
</div>
    <div class="text-sm font-medium text-gray-500 dark:text-gray-300 p-3">
      <a href="/shop" class="text-blue-700 hover:underline dark:text-blue-500">View More</a>
    </div>
  </div>
    <div class="absolute top-0 right-0 bg-red-500 text-white w-8 h-8 flex justify-center items-center rounded-full">
      <span>Sale</span>
    </div>
</div>
<div class="relative flex justify-center items-center h-full">
  <div class="w-full max-w-sm p-4 border bg-gray-100 dark:bg-[rgb(16,23,42)] border-gray-200 rounded-lg shadow sm:p-6 md:p-6 dark:border-gray-700">
    <h5 class="text-xl font-medium text-gray-900 dark:text-white pb-3">Deal of the Day</h5>

    <div class="grid grid-cols-2 gap-2">
  <div className='h-44 overflow-hidden rounded-lg'>
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" src="../../Photos_coro/acar1.webp" alt=""/>
  </div>
  <div className='h-44 overflow-hidden rounded-lg'>
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" src="../../Photos_coro/abea5.jpg" alt=""/>
  </div>
  <div className='h-44 overflow-hidden rounded-lg'>
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" src="../../Photos_coro/aplum1.jpg" alt=""/>
  </div>
  <div className='h-44 overflow-hidden rounded-lg'>
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" src="../../Photos_coro/aplum3.jpg" alt=""/>
  </div>
</div>
    <div class="text-sm font-medium text-gray-500  dark:text-gray-300 p-3">
      <a href="/shop" class="text-blue-700 hover:underline dark:text-blue-500">View More</a>
    </div>
  </div>
    <div class="absolute top-0 right-0  bg-blue-500 text-white py-1 px-4 rounded-lg transform -rotate-[0deg]">
      <span>Best Offers</span>
    </div>
</div>
      </div>
 </div>

<div className='max-w-9xl mx-auto p-3 flex flex-col gap-8 py-10 justify-center items-center'>
  {posts && posts.length > 0 && (
    <div className='flex flex-col gap-6'>
      <h2 className='text-2xl font-semibold text-center hover:text-teal-500'>What are you looking for?</h2>
      <div className='flex flex-wrap mt-2 gap-4 justify-center'>
      <CateCards url={"../../Photos_coro/plum_img.jpg"} type={"Plumber"} content={"Plumbers install and repair pipes and fixtures that carry water, gas, or other fluids in homes and businesses"}/>
      <CateCards url={"../../Photos_coro/elec_img.jpg"} type={"Electrician"} content={"An Electrician is a skilled professional who installs, maintains, and repairs electrical systems in buildings."} />
      <CateCards url={"../../Photos_coro/mech_img.jpg"} type={"Mechanic"} content={"A mechanic is a person who builds or repairs engines or use special tools and often work in shops or garages"}/>
      <CateCards url={"../../Photos_coro/cl_img.jpg"} type={"Cleaner"} content={" Cleaners sometimes repair things, and maintain their equipment in good working order, as well as washing."}/>
      <CateCards url={"../../Photos_coro/car_img.jpg"} type={"Carpenter"} content={"Carpenters are skilled craftsmen who work with wood to construct, install, and repair structures and fixtures."}/>
      <CateCards url={"../../Photos_coro/par_img.jpg"} type={"Beautician"} content={"A beautician improves the physical looks of customers and helps them feel better about themselves."}/>
      </div>
    </div>
  )}
  </div>
  <CalltoAction/>

<div className='max-w-9xl mx-5 p-3 flex flex-col gap-4 py-10 mt-4 justify-center items-center'>
  <div className="grid gap-4 max-w-9xl max-h-3xl mx-auto p-3 py-3 justify-center items-center overflow-hidden">
<Link
        onClick={() => setmodal(1)}
        className='text-lg text-center'
      >
              <h2 className='text-2xl font-semibold text-center hover:text-teal-500'>View all Electrician Services</h2>
      </Link>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-3 p-4">
        <div>
            <img className="transition-transform duration-300 transform hover:scale-105 rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover', padding:"2px"}} src="../../Photos_coro/ele1.jpg" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Air Conditioner</h1>
        </div>
        <div>
            <img className="transition-transform duration-300 transform hover:scale-105 rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover' , padding:"2px"}} src="../../Photos_coro/ele5.jpg" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Washing Mashine</h1>
        
        </div>
        <div>
            <img className="transition-transform duration-300 transform hover:scale-105 rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover' , padding:"2px"}} src="../../Photos_coro/ele3.jpg" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Electric Appliance</h1>
        
        </div>
        <div>
            <img className="transition-transform duration-300 transform hover:scale-105 rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover' , padding:"2px"}} src="../../Photos_coro/ele7.jpg" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Water Purifier</h1>
        
        </div>
        <div>
            <img className="transition-transform duration-300 transform hover:scale-105 rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover' , padding:"2px"}} src="../../Photos_coro/ele6.jpg" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Microwave Maintanance</h1>
       
        </div>
    </div>
    
</div>
<div className="grid gap-4 max-w-9xl max-h-3xl mx-auto p-3 py-3 justify-center items-center overflow-hidden">
<Link
        onClick={() => setmodal(2)}
        className='text-lg text-center'
      >
        <h2 className='text-2xl font-semibold text-center hover:text-teal-500'>View all Cleaning Services</h2>

      </Link>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-3 p-4">
        <div>
            <img className="transition-transform duration-300 transform hover:scale-105 rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover' , padding:"2px"}} src="../../Photos_coro/cle1.jpg" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Deep Cleaning</h1>
        
        </div>
        <div>
            <img className="transition-transform duration-300 transform hover:scale-105 rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover' , padding:"2px"}} src="../../Photos_coro/cle2.jpg" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Laundry Service</h1>

        </div>
        <div>
            <img className="transition-transform duration-300 transform hover:scale-105 rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover' , padding:"2px"}} src="../../Photos_coro/cle3.jpg" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Sanitization service</h1>
        
        </div>
        <div>
            <img className="transition-transform duration-300 transform hover:scale-105 rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover' , padding:"2px"}} src="../../Photos_coro/cle4.jpg" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Window Cleaning</h1>
        
        </div>
        <div>
            <img className="transition-transform duration-300 transform hover:scale-105 rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover' , padding:"2px"}} src="../../Photos_coro/cle5.jpg" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Carpet Cleaning</h1>
        
        </div>
        
    </div>
</div>
<h2 className='text-2xl font-semibold text-center mt-10 hover:text-teal-500'>Upcoming Services</h2>
<div className='flex flex-col sm:flex-row sm:gap-6 my-6 '>

{mode?<div role="status" class=" absolute max-w-sm ml-2 my-2 p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700 bg-gradient-to-b dark:from-blue-900 to-white from-teal-700 dark:to-[rgb(16,23,42)] left-9">
    <div class="grid grid-rows-1 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-5 gap-3 mt-3">
        
            <img className=" rounded-lg"  style={{ width: '250px', height: '82px', objectFit: 'cover' }} src="../../Photos_coro/com1.jpg" alt=""/>
            <img className=" rounded-lg"  style={{ width: '250px', height: '82px', objectFit: 'cover' }} src="../../Photos_coro/com2.jpg" alt=""/>
            <img className=" rounded-lg"  style={{ width: '250px', height: '82px', objectFit: 'cover' }} src="../../Photos_coro/com3.webp" alt=""/>
            <img className=" rounded-lg"  style={{ width: '250px', height: '82px', objectFit: 'cover' }} src="../../Photos_coro/com4.jpg" alt=""/>
            <img className=" rounded-lg"  style={{ width: '250px', height: '82px', objectFit: 'cover' }} src="../../Photos_coro/com5.jpg" alt=""/>
    </div>
    <span class="sr-only">Loading...</span>
</div>:<></>}
<div role="status" className="w-full mr-1 max-w-sm bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-gradient-to-b dark:from-[rgb(8,46,77)] to-white from-teal-700 dark:to-[rgb(16,23,42)]">
<Link onClick={() => {mode?setmode(0):setmode(1)}} className="relative group">
  <div className="relative overflow-hidden group">
    <img
      className="p-8 rounded-t-lg transition-transform duration-300 transform group-hover:scale-105"
      src={com}
      alt="product image"
      style={{ width: '375px', height: '400px', objectFit: 'cover' }}
    />
  </div>
</Link>
    <div class="px-5 pb-2">

            <h5 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white hover:text-teal-500">Computer Repairing</h5>
       
        <div class="flex items-center justify-between">
            <p class=" text-gray-900 dark:text-white pt-1">Computer repair workers, also known as computer technicians, are the behind-the-scenes heroes who keep our digital lives running smoothly. </p>
        </div>
    </div>
    <div className='"pt-16'></div>
</div>

<div role="status" className="w-full max-w-sm ml-1 bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-gradient-to-b dark:from-[rgb(8,46,77)] to-white from-teal-700 dark:to-[rgb(16,23,42)]">
<Link onClick={() => {mode1?setmode1(0):setmode1(1)}} className="relative group">
  <div className="relative overflow-hidden group">
    <img
      className="p-8 rounded-t-lg transition-transform duration-300 transform group-hover:scale-105"
      src={man}
      alt="product image"
      style={{ width: '375px', height: '400px', objectFit: 'cover' }}
    />
  </div>
</Link>
     <div class="px-5 pb-2">
        
            <h5 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white hover:text-teal-500">Construction Labours</h5>
       
        <div class="flex items-center justify-between">
            <p class=" text-gray-900 dark:text-white pt-1">Manufacturing laborers are the backbone of the production process, transforming raw materials into finished goods. </p>
        </div>
    </div>
</div>

{(mode1) ? (<div role="status" class=" absolute right-9 max-w-sm mr-2 my-2 p-4 md:flex-1 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700 bg-gradient-to-b dark:from-blue-900 to-white from-teal-700 dark:to-[rgb(16,23,42)]">
    <div class="grid grid-rows-1 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-5 gap-4 mt-3">
        
            <img className=" rounded-lg"  style={{ width: '250px', height: '80px', objectFit: 'cover' }} src="../../Photos_coro/conc1.png" alt=""/>
            <img className=" rounded-lg"  style={{ width: '250px', height: '80px', objectFit: 'cover' }} src="../../Photos_coro/conc2.png" alt=""/>
            <img className=" rounded-lg"  style={{ width: '250px', height: '80px', objectFit: 'cover' }} src="../../Photos_coro/conc3.webp" alt=""/>
            <img className=" rounded-lg"  style={{ width: '250px', height: '80px', objectFit: 'cover' }} src="../../Photos_coro/conc4.avif" alt=""/>
            <img className=" rounded-lg"  style={{ width: '250px', height: '80px', objectFit: 'cover' }} src="../../Photos_coro/conc5.jpg" alt=""/>
    </div>
    <span class="sr-only">Loading...</span>
</div>):<></>}

</div>
<Link to='/shop'  className='w-full h-auto '>
<img src="../../Photos_coro/pagea7.jpg" alt="Your Image" className= 'cursor-pointer w-full h-48 object-cover rounded-lg'/>
</Link>
</div>


<Modal
        show={modal===1}
        onClose={() => setmodal(false)}
        popup
        size='md'>
      <Modal.Header>
      <h2 className='text-2xl font-semibold text-center'>Electrician Services</h2>

      </Modal.Header>
        <Modal.Body>
        <div class="grid grid-cols-3 gap-4">
        <div>
            <img className=" rounded-lg"  style={{ width: '150px', height: '100px', objectFit: 'cover' }} src="../../Photos_coro/ele1.jpg" alt=""/>
        </div>
        <div>

            <img className=" rounded-lg"  style={{ width: '150px', height: '100px', objectFit: 'cover' }} src="../../Photos_coro/ele2.jpg" alt=""/>
        </div>
        <div>
            <img className=" rounded-lg"  style={{ width: '150px', height: '100px', objectFit: 'cover' }} src="../../Photos_coro/ele3.jpg" alt=""/>
        </div>
        <div>
            <img className=" rounded-lg"  style={{ width: '150px', height: '100px', objectFit: 'cover' }} src="../../Photos_coro/ele4.jpg" alt=""/>
        </div>
        <div>
            <img className=" rounded-lg"  style={{ width: '150px', height: '100px', objectFit: 'cover' }} src="../../Photos_coro/ele5.jpg" alt=""/>
        </div>
        <div>
            <img className=" rounded-lg"  style={{ width: '150px', height: '100px', objectFit: 'cover' }} src="../../Photos_coro/ele6.jpg" alt=""/>
        </div>
        {/* <div>
            <img className=" rounded-lg"  style={{ width: '150px', height: '100px', objectFit: 'cover' }} src="../../Photos_coro/ele7.jpg" alt=""/>
        </div>
        <div>
            <img className=" rounded-lg"  style={{ width: '150px', height: '100px', objectFit: 'cover' }} src="../../Photos_coro/ele8.jpg" alt=""/>
        </div> */}
        </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={modal===2}
        onClose={() => setmodal(false)}
        popup
        size='md'>
      <Modal.Header>
      <h2 className='text-2xl font-semibold text-center'>Cleaning Services</h2>

      </Modal.Header>
        <Modal.Body>
        <div class="grid grid-cols-3 gap-3">
        <div>
            <img className=" rounded-lg"  style={{ width: '150px', height: '100px', objectFit: 'cover' }} src="../../Photos_coro/cle1.jpg" alt=""/>
        </div>
        <div>
            <img className=" rounded-lg"  style={{ width: '150px', height: '100px', objectFit: 'cover' }}src="../../Photos_coro/cle2.jpg" alt=""/>
        </div>
        <div>
            <img className=" rounded-lg"  style={{ width: '150px', height: '100px', objectFit: 'cover' }} src="../../Photos_coro/cle3.jpg" alt=""/>
        </div>
        <div>
            <img className=" rounded-lg"  style={{ width: '150px', height: '100px', objectFit: 'cover' }} src="../../Photos_coro/cle4.jpg" alt=""/>
        </div>
        <div>
            <img className=" rounded-lg"  style={{ width: '150px', height: '100px', objectFit: 'cover' }} src="../../Photos_coro/cle5.jpg" alt=""/>
        </div>
        <div>
            <img className=" rounded-lg"  style={{ width: '150px', height: '100px', objectFit: 'cover' }} src="../../Photos_coro/cle6.jpg" alt=""/>
        </div>
        </div>
        </Modal.Body>
      </Modal>
    </div>
    
  )
}
