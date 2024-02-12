import { Avatar, Button, Dropdown, Navbar, NavbarToggle, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link , useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai';
import {FaMoon , FaSun , FaBell} from 'react-icons/fa'
import {useSelector , useDispatch} from 'react-redux'
import { toggleTheme } from '../redux/theme/themeSlice';
// import { urlencoded } from 'express';
import { signoutSuccess } from '../redux/user/userSlice';

export default function Header() {
    const path = useLocation().pathname;
    const Dispatch = useDispatch();
    const {currentUser} = useSelector(state =>state.user)
    const [userPosts, setUserPosts] = useState('');
    const {theme} = useSelector((state)=>state.theme);

    const handleSignout = async () => {
      try {
        const res = await fetch('/api/user/signout', {
          method: 'POST',
        });
        const data = await res.json();
        if (!res.ok) {
          console.log(data.message);
        } else {
          Dispatch(signoutSuccess());
        }
      } catch (error) {
        console.log(error.message);
      }
    };

  return (
    <Navbar className='border-b-2'>
      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Pro
        </span>
        Village
      </Link>
      <form>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
      <Button className='w-12 h-10 ' color='gray' pill>
        <Link to='/notification'> 
        <FaBell/>
        </Link>
      </Button>
        <Button
          className='w-12 h-10 hidden sm:inline'
          color='gray'
          pill
          onClick={()=>Dispatch(toggleTheme())}
        >
        {theme==='light' ? <FaMoon/>:<FaSun/>}
        </Button>
        {currentUser ? (
          <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt='user'
              img={currentUser.profilePicture}
              rounded
            />
          }>
            <Dropdown.Header>
              <span className='block text-sm'> {currentUser.username}</span>
              <span className='block text-sm font-medium truncate'> {currentUser.email}</span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
            <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider/>
            <Link to='/signin'onClick={handleSignout}>
            <Dropdown.Item> Sign Out</Dropdown.Item>
            </Link>
          </Dropdown>
          
        ):
        (
          <Link to='/signin'>
            <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
            </Button>
          </Link>
        )}

        {currentUser ? (
            <Link to='/signin'>
            <Button onClick={handleSignout} gradientDuoTone='purpleToBlue' outline >
              Sign Out
            </Button>
            </Link>
        ):
        (

          <Link to='/signup'>
            <Button gradientDuoTone='purpleToBlue' outline>
              Sign Up
            </Button>
          </Link>
        )}
          <NavbarToggle/>
          </div>
          {/* {userPosts.map((post) => ( */}
            <Navbar.Collapse>
            <Navbar.Link active={path==="/"} as={'div'} >
            <Link to='/'>Home</Link>
            </Navbar.Link>
            <Navbar.Link active={path==="/About"} as={'div'} >
            <Link to='/About'>About</Link>
            </Navbar.Link>
           
            {currentUser?.isProvider ? (
  <Navbar.Link active={path === `/updatepost/${userPosts}`} as={'div'}>
    <Link to={`/updatepost/${userPosts}`}>Update Profile</Link>
  </Navbar.Link>
) : (
  <Navbar.Link active={path === '/Create-post'} as={'div'}>
    <Link to='/Create-post'>Service Profile</Link>
  </Navbar.Link>
)}
         </Navbar.Collapse>
          </Navbar>
  )
}
