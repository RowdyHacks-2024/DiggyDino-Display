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
    const getAllDetectors = useQuery(GET_USER_DETECTORS, { variables: { user_id: currentUserUID}})

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