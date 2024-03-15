import { Avatar, Button, Dropdown, Navbar, NavbarToggle, TextInput } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { Link , useLocation , useNavigate } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai';
import {FaMoon , FaSun , FaBell} from 'react-icons/fa'
import {useSelector , useDispatch} from 'react-redux'
import { toggleTheme } from '../redux/theme/themeSlice';
// import { urlencoded } from 'express';
import { signoutSuccess } from '../redux/user/userSlice';

export default function Header() {
    const [searchstate,setsearchstate] = useState(0);
    const path = useLocation().pathname;
    const location = useLocation();
    const navigate = useNavigate();
    const Dispatch = useDispatch();
    const {currentUser} = useSelector(state =>state.user)
    const [userPosts, setUserPosts] = useState('');
    const {theme} = useSelector((state)=>state.theme);
    const [searchTerm , setSearchTerm] = useState('');
// console.log(searchTerm);
    useEffect(()=>{
      const urlParams = new URLSearchParams(location.search);
      const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
    },[location.search]);
    useEffect(() => {
      if (path !== '/shop') {
          setsearchstate(null);
      }
  }, [path]);
    const handleSubmit = (e) => {
      e.preventDefault();
      const urlParams = new URLSearchParams(location.search);
      urlParams.set('searchTerm', searchTerm);
      const searchQuery = urlParams.toString();
      navigate(`/search?${searchQuery}`);
    };
    const handleSubmit2 = (e) => {
      e.preventDefault();
      const urlParams = new URLSearchParams(location.search);
      urlParams.set('searchTerm', searchTerm);
      const searchQuery = urlParams.toString();
      navigate(`/shop?${searchQuery}`);
    };
  
    const notificationCount = currentUser?.notification.length;
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
    <div>
    <Navbar className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600'>
      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg dark:text-white text-gray-700'>
          Pro
        </span>
        Village
      </Link>
      {searchstate?
      <form onSubmit={handleSubmit2}>
        <TextInput
          type='text'
          placeholder='Search Products...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>:
      <form onSubmit={handleSubmit}>
        <TextInput
          type='text'
          placeholder='Search Services...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      }
      <Button className='w-12 h-11 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
      <Link to='/notification'> 
      <div className='relative'>
      <Button className='w-12 h-11 ' color='gray' pill >
        <FaBell />
        <i class="fa fa-bell" aria-hidden="true"></i>
      </Button>
      {notificationCount > 0 && (
      <span className='absolute top-0 right-0 inline-block bg-red-500 text-white rounded-full px-2 py-1 custom-text-sm'>{notificationCount}</span>
    )}
    </div>
      </Link>
        <Button
          className='w-12 h-11 hidden sm:inline'
          color='gray'
          pill
          onClick={()=>Dispatch(toggleTheme())}
        >
        {theme==='light' ?<FaSun/>:<FaMoon/>}
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
            <Navbar.Link active={path === '/shop'} as={'div'} onClick={(e)=>{setsearchstate(1)}}>
            <Link to='/shop'>Shop</Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/Create-post'} as={'div'}>
            <Link to='/Create-post'>Apply Service</Link>
            </Navbar.Link>
            <Navbar.Link active={path==="/About"} as={'div'} >
            <Link to='/About'>About</Link>
            </Navbar.Link>
         </Navbar.Collapse>
          </Navbar>
          <div className="pt-16">
            </div>
          </div>
  )
}
