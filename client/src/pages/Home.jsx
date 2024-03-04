import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react';
import PostCard from '../components/PostCard';
// import CalltoAction from '../components/CalltoAction.jsx'
import CateCards from '../components/CateCards.jsx';
import Corousal from '../components/Corousal.jsx'
export default function Home() {
  
  const [posts, setPosts] = useState([]);
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
      {/* <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Profiles</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div> */}

      {/* <Corousal/> */}

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
      </div>
      <Link
        to={'/search'}
        className='text-lg text-teal-500 hover:underline text-center'
      >
        View all Profiles
      </Link>
    </div>
  )}
</div>
    </div>
  )
}
