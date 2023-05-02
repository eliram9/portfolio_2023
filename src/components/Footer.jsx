import React from 'react'
import Layout from './Layout';
import Lottie from "lottie-react";
import { ReactIcon } from './Icons';

const Footer = () => {
    return (
        <footer className="w-full border-t-[1px] border-solid border-dark text-md text-dark dark:text-light dark:border-light">
            <Layout className='py-8 flex items-center justify-center'>
                <p>{new Date().getFullYear()} &copy; All Rights Reserved 
                    <span className='text-gold text-xl'> &#8857;</span> 
                </p>
                <div className='flex items-center justify-center ml-1 text-dark dark:text-light'>
                    Built with <span><ReactIcon className='w-5 mr-3 animate-spin-slow dark:fill-light'/></span> React.js
                </div>
               
            </Layout>
        </footer>
    )
}

export default Footer;