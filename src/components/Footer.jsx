import React, { useState, useEffect } from 'react';
import { ReactIcon, GoUp } from './Icons';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Add a scroll event listener to check when the user scrolls
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component is unmounted
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        // Calculate the scroll position
        const scrollY = window.scrollY;

        // Set the visibility of the button based on the scroll position
        if (scrollY > 0) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    const goUpBotton = () => {
        // Scroll to the top of the page
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };

    return (
        <footer className="w-full h-20 bg-gray relative">
            <button className='bg-gray px-5 py-5 rounded-full absolute top-[-22px] translate-x-[-50%] left-[50%] z-[0]' onClick={goUpBotton}  >
                <GoUp fill="#5c5e58" className='dark:fill-white hover:fill-gold dark:hover:fill-gold' width="20px"/>
            </button>
            <div className="py-7 flex items-center justify-center xl:py-5 lg:py-3 lg:text-sm md:py-4 sm:py-3 xs:py-1 z-10">
                <p className="xs:text-[10px]">{new Date().getFullYear()} &copy; All Rights Reserved 
                    <span className='text-gold text-xl xs:text-[10px]'> &#8857;</span> 
                </p>
                <p className='flex items-center justify-center ml-1 text-dark dark:text-light xs:text-[10px]'>
                    Built with <span><ReactIcon className='w-5 mr-3 animate-spin-slow dark:fill-light xs:w-4 xs:mr-0'/></span> React.js
                </p>
            </div>
        </footer>
    )
}

export default Footer;
