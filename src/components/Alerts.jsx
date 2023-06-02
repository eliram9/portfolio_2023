import React, { useState, useEffect } from 'react';
import { SuccessIcon } from './Icons';

const Alerts = ({message, status}) => {
    const [alertStatus, setAlertStatus] = useState(status);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAlertStatus(false);
            console.log(alertStatus);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            { alertStatus 
                ? <div className='bg-green-300 rounded-lg py-1 pl-3 text-sm font-medium flex items-center'>
                    <div className="w-6 h-6 mr-1 p-1"><SuccessIcon fill="#3d3f3a"/></div>
                        {message}
                </div> 
                : null
            }
        </>
    )        
}

export default Alerts

