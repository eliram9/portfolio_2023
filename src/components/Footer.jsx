import React, { useState, useEffect } from 'react';
import Layout from './Layout';
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
        <footer className="w-full border-t-[1px] border-solid border-black/30 text-md text-dark dark:text-light dark:border-light relative">
            {/* <div className="absolute w-48 h-24 rounded-tl-full rounded-tr-full bg-rose-500"></div> */}
            <button className={`absolute h-[24px] w-[48px] m-auto left-0 bottom-[100%] right-0 p-2 rounded-tl-full rounded-tr-full
                             bg-gray border-solid border-t-[1px] border-l-[1px] border-r-[1px] border-black/30
                             dark:bg-dark dark:border-light ${isVisible ? 'visible' : ''}`}
                    onClick={goUpBotton}                
            >
                    <GoUp fill="#3d3f3a" className='dark:fill-white hover:fill-gold dark:hover:fill-gold' />
                </button>
            <Layout className='py-4 flex items-center justify-center xl:py-5 lg:py-3 lg:text-sm md:py-4 sm:py-3 xs:py-1 bg-gray'>
                <p className="xs:text-[10px]">{new Date().getFullYear()} &copy; All Rights Reserved 
                    <span className='text-gold text-xl xs:text-[10px]'> &#8857;</span> 
                </p>
                <div className='flex items-center justify-center ml-1 text-dark dark:text-light xs:text-[10px]'>
                    Built with <span><ReactIcon className='w-5 mr-3 animate-spin-slow dark:fill-light xs:w-4 xs:mr-0'/></span> React.js
                </div>
            </Layout>
        </footer>
    )
}

export default Footer;
