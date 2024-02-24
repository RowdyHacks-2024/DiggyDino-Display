import React, { useState }from 'react';
import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'
import { onAuthStateChanged } from 'firebase/auth'

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
        <div>
             <ul>
                <Link to="/">Home  </Link>
                <Link to="/map">Map  </Link>
                {isSignedIn ? (<Link to="/profile">Profile  </Link> ) 
                    : ( <Link to="/login">Login  </Link> ) }

            </ul>
        </div>
    );
};

export default NavBar;