import { auth, googleAuthProvider } from "../config/firebase"
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"



export const Auth = () => {
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    
  
    const [user, setUser] = useState({})
    const [isSignedIn, setIsSignedIn] = useState(false)
    const [signInFailure, setSignInFailure] = useState(false)
    
    const[error, setError] = useState("")

    const navigate = useNavigate();

    useEffect( () => {
        if (isSignedIn){
            navigate("/profile")
        } 
    }, [isSignedIn, navigate])

    
    const signIn = async () => {
        try{
            //wait for firebase to authenticate user credentials
            await signInWithEmailAndPassword( auth, loginEmail, loginPassword )
            setIsSignedIn(true)
            setLoginEmail('');
            setLoginPassword('');
        } catch (error) {
            setError((error as Error).message);
        }
    };

    const signInWithGoogle = async () => {
        try{
            //wait for firebase to authenticate user credentials
            await signInWithPopup( auth, googleAuthProvider )
            setIsSignedIn(true)

        } catch (error) {
            setError((error as Error).message);
        }
    
    }

    
    return (
        <div className="login-container">
            <div className='container2'>
            <p>
                <div className="input-container">
                    <input 
                        placeholder="Email..."
                        type="text"
                        value={loginEmail}
                        onChange={ (e) => setLoginEmail(e.target.value) }
                    />
                </div>
                
                <div className="input-container">
                    <input 
                        placeholder="Password..."
                        type="password"
                        value={loginPassword}
                        onChange={ (e) => setLoginPassword(e.target.value) }
                    />
                </div>

                <button onClick={signIn}> Sign In </button>

                <br></br>
                <br></br>
                <p>For new users: </p>
                <button > <a href="./register" style={{ textDecoration: 'none', color: '#ECE6D8' }}>Create Account</a></button>
                
                <p>______________ or ______________</p>
                
                <button onClick={signInWithGoogle}> Sign In With Google </button>
                {error && <div className="error-message">{error}</div>}

            </p>
            </div>   
        </div>
    

    )
}

export default Auth

