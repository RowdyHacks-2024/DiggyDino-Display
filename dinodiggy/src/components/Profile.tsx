import React from 'react'
import ReactDOM from 'react-dom/client'
import { onAuthStateChanged, signOut, User } from 'firebase/auth'
import { auth } from '../config/firebase'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const [count, setCount] = useState(0)
    const [isSignedOut, setIsSignedOut] = useState(false)
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    onAuthStateChanged( auth, (currentUser: User | null) => { 
        setUser(currentUser)
        if (!currentUser){
            setIsSignedOut(true)
        }
        
    } );

    useEffect( () => {
        if (isSignedOut){
            navigate("/")
        } 
    }, [isSignedOut, navigate])

    const logOut = async () => {
        try{
            await signOut(auth)
        } catch (err){
            console.error(err)
        }
    }

  return(
    <div className='container'>
        <div className='resource-container'>
        <p> User: {user?.email} </p>
        <br></br>
        <button onClick={logOut} > Sign Out </button>
        
        </div>
    </div>
  )
}

export default Profile