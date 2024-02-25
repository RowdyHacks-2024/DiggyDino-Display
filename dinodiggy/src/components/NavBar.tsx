import React, { useState }from 'react';
import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import "../index.css"


const NavBar = () => {
    const [isSignedIn, setIsSignedIn] = useState(false)

    onAuthStateChanged( auth, (currentUser) => { 
        if (currentUser){
            setIsSignedIn(true)
        } else{
            setIsSignedIn(false)
        }
        
    } );

    return (
        <nav>
            <p className="navbar-brand">DIGGY DINO</p>
            <div className="navbar-links">
                <a href="/">HOME</a>
                <a href="/resources">RESOURCES</a>
                <a href="/monitor">MONITOR</a>
                {isSignedIn ? (
                <a href="/profile">PROFILE</a>
                ) : (
                <a href="/login">LOGIN</a>
                )}
            </div>
    
        </nav>
    );
};

export default NavBar;