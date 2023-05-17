import React from 'react'
import Layout from './Layout';
import Lottie from "lottie-react";
import { ReactIcon } from './Icons';

const Footer = () => {
    return (
        <footer className="w-full border-t-[1px] border-solid border-dark text-md text-dark dark:text-light dark:border-light">
            <Layout className='py-6 flex items-center justify-center xl:py-5 lg:py-3 lg:text-sm md:py-4 sm:py-3 xs:py-1'>
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