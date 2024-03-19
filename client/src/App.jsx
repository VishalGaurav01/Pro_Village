import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'
import CreatePost from './pages/CreatePost'
import UpdatePost from './pages/UpdatePost'
import PostPage from './pages/PostPage'
import Notice from './pages/Notice'
import Search from './pages/Search'
import ProductPage from './pages/ProductPage'
import CreateShop from './pages/CreateShop'
import Cart from './pages/Cart'
import Payment from './pages/Payment'

export default function Main() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route element={<PrivateRoute/>}>
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/Create-post" element={<CreatePost />}/>
        <Route path="/updatepost/:postId" element={<UpdatePost />}/>
        <Route path="/notification" element={<Notice/>}/>
        <Route path="/cart" element={<Cart/>}/>

        </Route>
        <Route element={<OnlyAdminPrivateRoute/>}>
        <Route path="/Create-shop" element={<CreateShop/>}/>
        </Route>
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/Signin" element={<Signin />}/>
        <Route path="/Search" element={<Search />}/>
        <Route path="/shop" element={<Projects />}/>
        <Route path="/shop/:shopSlug" element={<ProductPage />}/>
        <Route path='/post/:postSlug' element={<PostPage/>}/>
        <Route path='/payment' element={<Payment/>}/>
        

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
