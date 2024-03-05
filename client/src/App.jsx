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

export default function Main() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route element={<PrivateRoute/>}>
        <Route path="/Dashboard" element={<Dashboard />}/>
        </Route>
        <Route element={<PrivateRoute/>}>
        <Route path="/Create-post" element={<CreatePost />}/>
        <Route path="/updatepost/:postId" element={<UpdatePost />}/>
        <Route path="/notification" element={<Notice/>}/>
        </Route>
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/Signin" element={<Signin />}/>
        <Route path="/Search" element={<Search />}/>
        <Route path="/Project" element={<Projects />}/>
        <Route path='/post/:postSlug' element={<PostPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
