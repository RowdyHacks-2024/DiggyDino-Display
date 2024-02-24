import { useState} from 'react'

import './App.css'

import Home from './components/Home'
import Map from './components/Map'
import Auth from './components/Auth'
import Error from './components/Error'
import Profile from './components/Profile'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/map" element={ <Map />} />
        <Route path="/profile" element={ <Profile />} />
        <Route path="*" element={<Error />} />
      </Routes> 
    </div>
  )
}

export default App
