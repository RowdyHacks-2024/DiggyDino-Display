import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth'
import { auth } from '../config/firebase'
import { useNavigate } from 'react-router-dom';

const Monitor = () => {

    const [user, setUser] = useState<User | null>(null);
    
    type Device = string
    const [device, setDevice] = useState<Device | "">("");

    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser: User | null) => {
            setUser(currentUser);
        });
        return () => unsubscribe(); // Cleanup function
    }, []);

    const onDeviceClick = ( device: Device) => {
        setDevice(device);
    };

    useEffect(() => {
        if (device) {
            navigate('/data');
        }
    }, [device, navigate]);

    return (
        <div className='container'>
            <div className='container2'>
            <p>
                Click a device to see your real-time data being collected!
            </p>
            <button id="buttonId" onClick={ (e) => {if (e.target instanceof HTMLButtonElement) {onDeviceClick(e.target.id)} } }>
                Device 1
            </button>

            </div>
        </div>
    );
    
};


export default Monitor;