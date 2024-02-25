import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth'
import { auth } from '../config/firebase'
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER_DETECTORS } from '../Queries/detectors';
const Monitor = () => {

    const [user, setUser] = useState<User | null>(null);
    
    type Device = string
    const [device, setDevice] = useState<Device | "">("");
    const currentUserUID = auth.currentUser?.uid ?? ""
    
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
            <div className='resource-container'>
            <p>
                Collecting Data from Detector 8...

            </p>

            

            </div>

            <div className='resource-container'>
            <div className='container2'>
                Temperature: 75 degrees farenheit
            </div>
            
            <div className='container2'>
                Pressure: 995 hPa
            </div>

            <div className='container2'>
                Altitude 115 ft
            </div>

            <div className='container2'>
                Coordinates: 48.8566° N, 2.3522° E
            </div>
            </div>

            <div className='resource-container'>
                Current Prediction: Great place to dig!
            </div>

            
        </div>
    );
    
};


export default Monitor;