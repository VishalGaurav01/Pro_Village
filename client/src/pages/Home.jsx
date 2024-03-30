import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react';
import CateCards from '../components/CateCards.jsx';
import { Modal,Button} from 'flowbite-react';
import CalltoAction from '../components/CalltoAction.jsx'
import MyComponent from '../components/Buttons.jsx';
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

  return (
    <div>

      <div className='w-full h-full bg-gradient-to-b dark:from-[rgb(8,46,77)] to-white from-teal-700 dark:to-[rgb(16,23,42)]'>
    
      <section >
    <div class="grid max-w-screen-xl px-4 my-0 mx-auto lg:gap-8 xl:gap-20 lg:py-8 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-3xl mb-6 text-4xl font-extrabold text-white tracking-tight leading-none md:text-5xl xl:text-6xl ">Welcome to City Service</h1>
            <p class="max-w-2xl  mb-2 font-light text-white lg:mb-8 md:text-lg lg:text-xl ">An online platform that connected service professionals such as plumbers, 
        electricians, beauticians, and others with customers in need of those services.</p>
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
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fmplum.jpg?alt=media&token=f0a5dbe7-40e8-4aa8-83e8-d95bee5e394b" alt=""/>
  </div>
  <div className='h-44 overflow-hidden rounded-lg'>
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fmelec.jpg?alt=media&token=2467e23f-a49e-420d-bcdf-ad231acbb8ce" alt=""/>
  </div>
  <div className='h-44 overflow-hidden rounded-lg'>
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/mcle.jpg?alt=media&token=f9897443-3749-482f-81ef-0e0915eea083" alt=""/>
  </div>
  <div className='h-44 overflow-hidden rounded-lg'>
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fmmech.jpg?alt=media&token=2b115d50-7fcc-401a-aaf2-d05445c78fbf" alt=""/>
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
    src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fabea9.jpg?alt=media&token=23000d4e-15d1-4268-b790-cac2725760bb" alt=""/>
  </div>
  <div className='h-44 overflow-hidden rounded-lg'>
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" 
    src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fabea4.jpg?alt=media&token=b5c4edb7-1809-45b7-9c35-d5363adadfe8" alt=""/>
  </div>
  <div className='h-44 overflow-hidden rounded-lg'>
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" 
    src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fepro4.jpg?alt=media&token=beae1d52-3716-4f6f-8d53-25de84862b9f" alt=""/>
  </div>
  <div className='h-44 overflow-hidden rounded-lg'>
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" 
    src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Facar2.jpg?alt=media&token=de9c879d-673d-4a77-a80c-77db62e3bab4" alt=""/>
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
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Famech3.webp?alt=media&token=0ab7ab4e-60b5-473a-8d22-9d7f09626bdd" alt=""/>
  </div>
  <div className='h-44 overflow-hidden rounded-lg'>
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Facle5.jpg?alt=media&token=7cbbd7f3-8c87-4f4d-9809-195f3c8e3320" alt=""/>
  </div>
  <div className='h-44 overflow-hidden rounded-lg'>
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Facle3.webp?alt=media&token=33d44b54-f3b3-407d-bd35-73c9d5c6f1e2" alt=""/>
  </div>
  <div className='h-44 overflow-hidden rounded-lg'>
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Faplum2.jpg?alt=media&token=34d88b00-2b7b-4f10-ab51-cef860bc71d1" alt=""/>
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
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Facar1.webp?alt=media&token=097d054d-64af-46a2-b3b9-a548e9fb422a" alt=""/>
  </div>
  <div className='h-44 overflow-hidden rounded-lg'>
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fabea5.jpg?alt=media&token=7f314fa5-06d3-4835-a1af-badf1f457996g" alt=""/>
  </div>
  <div className='h-44 overflow-hidden rounded-lg'>
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Faplum1.jpg?alt=media&token=abf1439e-274e-4d98-b6bb-34e5cc9364d7" alt=""/>
  </div>
  <div className='h-44 overflow-hidden rounded-lg'>
    <img class="h-full max-w-full rounded-lg transform transition-transform hover:scale-105" src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Faplum3.jpg?alt=media&token=1d414b13-9c9f-482b-ab29-894926f8da47" alt=""/>
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
      <CateCards url={"https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fplum_img.jpg?alt=media&token=05efe5d7-bf1a-46b4-98ad-6b98652b771d"} type={"Plumber"} content={"Plumbers install and repair pipes and fixtures that carry water, gas, or other fluids in homes and businesses"}/>
      <CateCards url={"https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Felec_img.jpg?alt=media&token=ce00dedc-0104-4ab2-af02-69b25af56f71"} type={"Electrician"} content={"An Electrician is a skilled professional who installs, maintains, and repairs electrical systems in buildings."} />
      <CateCards url={"https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fmech_img.jpg?alt=media&token=3fc8a872-f758-44c9-b43d-415f5364a2aa"} type={"Mechanic"} content={"A mechanic is a person who builds or repairs engines or use special tools and often work in shops or garages"}/>
      <CateCards url={"https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fcl_img.jpg?alt=media&token=7412b2cb-77eb-4ce8-954f-cb9f750ec68f"} type={"Cleaner"} content={" Cleaners sometimes repair things, and maintain their equipment in good working order, as well as washing."}/>
      <CateCards url={"https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fcar_img.jpg?alt=media&token=be412c9a-26c1-49ca-b1e2-23ae4e3419a8"} type={"Carpenter"} content={"Carpenters are skilled craftsmen who work with wood to construct, install, and repair structures and fixtures."}/>
      <CateCards url={"https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fpar_img.jpg?alt=media&token=cbd56a56-8945-45f5-9270-4b4f3b240c64"} type={"Beautician"} content={"A beautician improves the physical looks of customers and helps them feel better about themselves."}/>
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
            <img className="transition-transform duration-300 transform hover:scale-105 rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover', padding:"2px"}} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fele1.jpg?alt=media&token=1aa8bce1-55fd-48bb-9f7b-48d27f016888" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Air Conditioner</h1>
        </div>
        <div>
            <img className="transition-transform duration-300 transform hover:scale-105 rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover' , padding:"2px"}} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fele5.jpg?alt=media&token=cad69b52-6695-430a-b7a3-03f609c8f3fc" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Washing Mashine</h1>
        
        </div>
        <div>
            <img className="transition-transform duration-300 transform hover:scale-105 rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover' , padding:"2px"}} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fele3.jpg?alt=media&token=ef3ef517-a72f-40e2-b181-94e69f734eeb" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Electric Appliance</h1>
        
        </div>
        <div>
            <img className="transition-transform duration-300 transform hover:scale-105 rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover' , padding:"2px"}} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fele7.jpg?alt=media&token=1620deda-e2b0-4a55-8928-2b7e98da7e47" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Water Purifier</h1>
        
        </div>
        <div>
            <img className="transition-transform duration-300 transform hover:scale-105 rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover' , padding:"2px"}} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fele6.jpg?alt=media&token=8fb2ee6d-a766-46bc-99d7-49334ed6e86a" alt=""/>
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
            <img className="transition-transform duration-300 transform hover:scale-105 rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover' , padding:"2px"}} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fcle1.jpg?alt=media&token=b8c0f5dd-1c18-4aa9-9de1-9d88ea96d380" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Deep Cleaning</h1>
        
        </div>
        <div>
            <img className="transition-transform duration-300 transform hover:scale-105 rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover' , padding:"2px"}} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fcle2.jpg?alt=media&token=d3b244a3-9a98-4416-acae-7502d8d63ef0" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Laundry Service</h1>

        </div>
        <div>
            <img className="transition-transform duration-300 transform hover:scale-105 rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover' , padding:"2px"}} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fcle3.jpg?alt=media&token=155e199b-e21b-4421-82c2-295ea11dabbf" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Sanitization service</h1>
        
        </div>
        <div>
            <img className="transition-transform duration-300 transform hover:scale-105 rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover' , padding:"2px"}} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fcle4.jpg?alt=media&token=b5c6b451-1069-4cca-9327-5bca63ad1cc8" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Window Cleaning</h1>
        
        </div>
        <div>
            <img className="transition-transform duration-300 transform hover:scale-105 rounded-lg"  style={{ width: '300px', height: '200px', objectFit: 'cover' , padding:"2px"}} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fcle5.jpg?alt=media&token=9ab6cedd-9397-42e3-b355-bebd57cb662d" alt=""/>
            <h1 className='text-lg justify-center text-center font-semibold line-clamp-2'> Carpet Cleaning</h1>
        
        </div>
        
    </div>
</div>
<h2 className='text-2xl font-semibold text-center mt-10 hover:text-teal-500'>Upcoming Services</h2>
<div className='flex flex-col sm:flex-row sm:gap-6 my-6 '>

{mode?<div role="status" class=" absolute max-w-sm ml-2 my-2 p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700 bg-gradient-to-b dark:from-blue-900 to-white from-teal-700 dark:to-[rgb(16,23,42)] left-9">
    <div class="grid grid-rows-1 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-5 gap-3 mt-3">
        
            <img className=" rounded-lg"  style={{ width: '250px', height: '82px', objectFit: 'cover' }} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Facom1.jpg?alt=media&token=24a13255-c86f-449b-b7ec-e80c990cff21" alt=""/>
            <img className=" rounded-lg"  style={{ width: '250px', height: '82px', objectFit: 'cover' }} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Facom2.jpg?alt=media&token=2f59857b-89e6-4306-8e8e-00ee65079083" alt=""/>
            <img className=" rounded-lg"  style={{ width: '250px', height: '82px', objectFit: 'cover' }} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Facom3.webp?alt=media&token=5a115eaf-68cb-4a11-bfcd-9dc5801da336" alt=""/>
            <img className=" rounded-lg"  style={{ width: '250px', height: '82px', objectFit: 'cover' }} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Facom4.jpg?alt=media&token=f8983053-7e7b-45af-87f9-7efb5b699ece" alt=""/>
            <img className=" rounded-lg"  style={{ width: '250px', height: '82px', objectFit: 'cover' }} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Facom5.jpg?alt=media&token=df82c49c-6272-43bc-8d6e-034b40f63eba" alt=""/>
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
        
            <img className=" rounded-lg"  style={{ width: '250px', height: '80px', objectFit: 'cover' }} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fconc1.png?alt=media&token=09157485-84a9-4bf6-b11a-47a2cce35ad9" alt=""/>
            <img className=" rounded-lg"  style={{ width: '250px', height: '80px', objectFit: 'cover' }} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fconc2.png?alt=media&token=358f6453-b949-4557-bdf0-7e9c1583fc8c" alt=""/>
            <img className=" rounded-lg"  style={{ width: '250px', height: '80px', objectFit: 'cover' }} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fconc3.webp?alt=media&token=963fdad7-e6fc-441d-9e9e-458e123d4078" alt=""/>
            <img className=" rounded-lg"  style={{ width: '250px', height: '80px', objectFit: 'cover' }} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fconc4.avif?alt=media&token=e863f5b7-aaa7-46b7-b5a0-9b29b80aae58" alt=""/>
            <img className=" rounded-lg"  style={{ width: '250px', height: '80px', objectFit: 'cover' }} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fconc5.jpg?alt=media&token=d90d92fb-abb3-40ad-80a2-e22dfe9014df" alt=""/>
    </div>
    <span class="sr-only">Loading...</span>
</div>):<></>}

</div>
<Link to='/shop'  className='w-full h-auto '>
<img src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fpagea7.jpg?alt=media&token=ada048a2-e608-40fe-98b7-e49d22b81d57" alt="Your Image" className= 'cursor-pointer w-full h-48 object-cover rounded-lg'/>
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
            <img className=" rounded-lg"  style={{ width: '150px', height: '100px', objectFit: 'cover' }} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fele1.jpg?alt=media&token=1aa8bce1-55fd-48bb-9f7b-48d27f016888" alt=""/>
        </div>
        <div>

            <img className=" rounded-lg"  style={{ width: '150px', height: '100px', objectFit: 'cover' }} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fele2.jpg?alt=media&token=32fd03fd-08dc-4f7e-ad8e-1ea0b0f97cd1" alt=""/>
        </div>
        <div>
            <img className=" rounded-lg"  style={{ width: '150px', height: '100px', objectFit: 'cover' }} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fele3.jpg?alt=media&token=ef3ef517-a72f-40e2-b181-94e69f734eeb" alt=""/>
        </div>
        <div>
            <img className=" rounded-lg"  style={{ width: '150px', height: '100px', objectFit: 'cover' }} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fele4.jpg?alt=media&token=3ad6be14-0241-4cc2-98ed-daf0051e03be" alt=""/>
        </div>
        <div>
            <img className=" rounded-lg"  style={{ width: '150px', height: '100px', objectFit: 'cover' }} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fele5.jpg?alt=media&token=cad69b52-6695-430a-b7a3-03f609c8f3fc" alt=""/>
        </div>
        <div>
            <img className=" rounded-lg"  style={{ width: '150px', height: '100px', objectFit: 'cover' }} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fele6.jpg?alt=media&token=8fb2ee6d-a766-46bc-99d7-49334ed6e86a" alt=""/>
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
            <img className=" rounded-lg"  style={{ width: '150px', height: '100px', objectFit: 'cover' }} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fcle1.jpg?alt=media&token=b8c0f5dd-1c18-4aa9-9de1-9d88ea96d380" alt=""/>
        </div>
        <div>
            <img className=" rounded-lg"  style={{ width: '150px', height: '100px', objectFit: 'cover' }}src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fcle2.jpg?alt=media&token=d3b244a3-9a98-4416-acae-7502d8d63ef0" alt=""/>
        </div>
        <div>
            <img className=" rounded-lg"  style={{ width: '150px', height: '100px', objectFit: 'cover' }} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fcle3.jpg?alt=media&token=155e199b-e21b-4421-82c2-295ea11dabbf" alt=""/>
        </div>
        <div>
            <img className=" rounded-lg"  style={{ width: '150px', height: '100px', objectFit: 'cover' }} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fcle4.jpg?alt=media&token=b5c6b451-1069-4cca-9327-5bca63ad1cc8" alt=""/>
        </div>
        <div>
            <img className=" rounded-lg"  style={{ width: '150px', height: '100px', objectFit: 'cover' }} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fcle5.jpg?alt=media&token=9ab6cedd-9397-42e3-b355-bebd57cb662d" alt=""/>
        </div>
        <div>
            <img className=" rounded-lg"  style={{ width: '150px', height: '100px', objectFit: 'cover' }} src="https://firebasestorage.googleapis.com/v0/b/learning-803e2.appspot.com/o/images%2Fcle6.jpg?alt=media&token=6c711b65-351f-4ab1-bdf3-d484461beede" alt=""/>
        </div>
        </div>
        </Modal.Body>
      </Modal>
    </div>
    
  )
}
