import React, { useState } from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth'
import { auth } from '../config/firebase'

const Monitor = () => {
    
    const [user, setUser] = useState<User | null>(null);

    onAuthStateChanged( auth, (currentUser: User | null) => { 
        setUser(currentUser)
        
    } );

    return (
        <div className='monitor-container'>
            
        </div>
    );
};

export default Monitor;