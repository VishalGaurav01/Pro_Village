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

export default function Home() {
  const val="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg"
const val1="https://st2.depositphotos.com/1718692/7425/i/450/depositphotos_74257459-stock-photo-lake-near-the-mountain-in.jpg"

  const [posts, setPosts] = useState([]);
  const [modal, setmodal] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts?limit=4');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div >
      {/* <div className='z-0 flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to
        <span className='px-2 ml-1 py-1 lg:text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Pro
        </span>Village</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
          Here you'll find a variety of articles and tutorials on topics such as
          web development, software engineering, and programming languages.
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'>
          View all Profiles
        </Link>
      </div> */}
      <div className='p-3  bg-amber-100 dark:bg-slate-700 w-full h-full'>
      <Corousal/>
      </div>

      <div className=' flex flex-col gap-6 p-20 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to
        <span className='px-2 ml-1 py-1 lg:text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Pro
        </span>Village</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
          Here you'll find a variety of articles and tutorials on topics such as
          web development, software engineering, and programming languages.
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'>
          View all Profiles
        </Link>
      </div>


<div className='max-w-9xl mx-auto p-3 flex flex-col gap-8 py-7 justify-center items-center'>
  {posts && posts.length > 0 && (
    <div className='flex flex-col gap-6'>
      <h2 className='text-2xl font-semibold text-center hover:text-teal-500'>What are you looking for?</h2>
      <div className='flex flex-wrap mt-2 gap-4 justify-center'>
      <CateCards url={"../../Photos_coro/plum_img.jpg"} type={"Plumber"} />
      <CateCards url={"../../Photos_coro/elec_img.jpg"} type={"Electrician"} />
      <CateCards url={"../../Photos_coro/mech_img.jpg"} type={"Mechanic"} />
      <CateCards url={"../../Photos_coro/cl_img.jpg"} type={"Cleaner"} />
      <CateCards url={"../../Photos_coro/car_img.jpg"} type={"Carpenter"} />
      <CateCards url={"../../Photos_coro/par_img.jpg"} type={"Beautician"} />
      {/* <ProductCard url={"../../Photos_coro/par_img.jpg"}/> */}
      </div>
    </div>
  )}
  </div>
  


<div className='max-w-9xl mx-auto p-3 flex flex-col gap-8 py-7 justify-center items-center'>
  <div className="grid gap-4 max-w-9xl max-h-3xl mx-auto p-3 py-7 justify-center items-center overflow-hidden">
<Link
        onClick={() => setmodal(1)}
        className='text-lg text-center'
      >
              <h2 className='text-2xl font-semibold text-center hover:text-teal-500'>View all Electrician Services</h2>
      </Link>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-3">
        <div>
            <img className=" rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover' }} src="../../Photos_coro/ele1.jpg" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Air Conditioner</h1>
        
        </div>
        <div>
            <img className=" rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover' }} src="../../Photos_coro/ele5.jpg" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Washing Mashine</h1>
        
        </div>
        <div>
            <img className=" rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover' }} src="../../Photos_coro/ele3.jpg" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Electric Appliance</h1>
        
        </div>
        <div>
            <img className=" rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover' }} src="../../Photos_coro/ele7.jpg" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Water Purifier</h1>
        
        </div>
        <div>
            <img className=" rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover' }} src="../../Photos_coro/ele6.jpg" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Microwave Maintanance</h1>
       
        </div>
    </div>
    
</div>
<div className="grid gap-4 max-w-9xl max-h-3xl mx-auto p-3 py-7 justify-center items-center overflow-hidden">
<Link
        onClick={() => setmodal(2)}
        className='text-lg text-center'
      >
        <h2 className='text-2xl font-semibold text-center hover:text-teal-500'>View all Cleaning Services</h2>

      </Link>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-3">
        <div>
            <img className=" rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover' }} src="../../Photos_coro/cle1.jpg" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Deep Cleaning</h1>
        
        </div>
        <div>
            <img className=" rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover' }} src="../../Photos_coro/cle2.jpg" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Laundry Service</h1>

        </div>
        <div>
            <img className=" rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover' }} src="../../Photos_coro/cle3.jpg" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Sanitization service</h1>
        
        </div>
        <div>
            <img className=" rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover' }} src="../../Photos_coro/cle4.jpg" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Window Cleaning</h1>
        
        </div>
        <div>
            <img className=" rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover' }} src="../../Photos_coro/cle5.jpg" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Carpet Cleaning</h1>
        
        </div>
        
    </div>
</div>

</div>
<div role="status" class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center py-3 px-3">
    <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
        <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
        </svg>
    </div>
    <div class="w-full">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    </div>
    <span class="sr-only">Loading...</span>
</div>
<section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply max-w-9xl mx-auto my-3 p-3">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">New Launches of Products & more</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div class="flex flex-col gap-4 space-y-3 sm:flex-row sm:justify-center sm:space-y-0">
            <Link to='/Project'>
            <Button gradientDuoTone='purpleToBlue'  outline>
            Shop  
                <svg class="w-5 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Button>
          </Link>
          <Link to='/About'>
            <Button gradientDuoTone='purpleToBlue'  outline>
            Know more
            </Button>
          </Link>
            {/* <a href="/About" class="inline-flex justify-center hover:text-gray-900 items-center w-55 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                
            </a>   */}
        </div>
    </div>
</section>
<Modal
        show={modal===1}
        onClose={() => setmodal(false)}
        popup
        size='md'>
      <Modal.Header>
      <h2 className='text-2xl font-semibold text-center'>Electrician Services</h2>

      </Modal.Header>
        <Modal.Body>
        <div class="grid grid-cols-4 gap-4">
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
        <div>
            <img className=" rounded-lg"  style={{ width: '150px', height: '100px', objectFit: 'cover' }} src="../../Photos_coro/ele7.jpg" alt=""/>
        </div>
        <div>
            <img className=" rounded-lg"  style={{ width: '150px', height: '100px', objectFit: 'cover' }} src="../../Photos_coro/ele8.jpg" alt=""/>
        </div>
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
