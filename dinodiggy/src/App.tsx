import { useState } from 'react'

import './App.css'
import './index.css'

import Home from './components/Home'
import Resources from './components/Resources'
import Community from './components/Community'
import Monitor from './components/Monitor'
import Auth from './components/Auth'
import Error from './components/Error'
import Profile from './components/Profile'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Data from './components/Data'
import Register from './components/Register'

import { Routes, Route, useLocation } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  const location = useLocation();
  const excludeNavBarRoutes = [ '/data']; 
  const shouldExcludeNavBar = excludeNavBarRoutes.includes(location.pathname);

  
  return (
    <div className="App">
      <nav className='navBar'>
        {!shouldExcludeNavBar && <NavBar /> }
      </nav>
      <div className='content-container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/monitor" element={<Monitor />} />
        <Route path="/community" element={<Community />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/data" element={<Data />} />
        <Route path='/register' element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes> 
      </div>
      {!shouldExcludeNavBar && <div className='footer-container'> <Footer /> </div>}
    </div>
  )
}

export default App
