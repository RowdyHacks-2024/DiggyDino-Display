import { useState} from 'react'

import './App.css'
import './index.css'

import Home from './components/Home'
import Resources from './components/Resources'
import Community from './components/community'
import Monitor from './components/Monitor'
import Auth from './components/Auth'
import Error from './components/Error'
import Profile from './components/Profile'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import { Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div className='navbar'>
        <NavBar />
      </div>
      <div className='content-container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/resources" element={ <Resources />} />
          <Route path="/monitor" element={ <Monitor />} />
          <Route path="/community" element={ <Community />} />
          <Route path="/profile" element={ <Profile />} />
          <Route path="*" element={<Error />} />
        </Routes> 
      </div>
      <div className='.footer-container'>
        <Footer />
      </div>
    </div>
  )
}

export default App
