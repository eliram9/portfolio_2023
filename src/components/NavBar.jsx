import React, { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

import Logo from "./Logo";
import { GithubIcon, LinkedinIcon, CodepenIcon, AWSIcon, DarkModeIcon, LightModeIcon } from "./Icons";


const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    // console.log(router);
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`absolute h-[1px] inline-block bg-dark left-0 -bottom-0.5
                            group-hover:w-full transition-[width] ease duration-300"
                            ${router.asPath === href ? "w-full" : "w-0"} dark:bg-light`}
            >
                &nbsp;
            </span>
        </Link>
    );
}

// Navbar for responsive mode only (mobile)
const ResponsiveCustomLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter(); 
    
    const handleClick = () => {
        toggle();
        router.push(href);
    }

    return (
        <button href={href} className={`${className} relative group text-md  text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}
            <span className={`absolute h-[1px] inline-block bg-light left-0 -bottom-0.5
                            group-hover:w-full transition-[width] ease duration-300"
                            ${router.asPath === href ? "w-full" : "w-0"} dark:bg-dark`}
            >
                &nbsp;
            </span>
        </button>
    );
}

const NavBar = () => {
    // night mode or light mode  
    const [mode, setMode] = useThemeSwitcher();   
    const [isOpen, setIsOpen] = useState(false); 
  
    const handleClick = () => {
        setIsOpen(!isOpen);
    } 

    return (  
        <header className="w-full text-dark px-32 py-10 flex items-center justify-between dark:text-light relative z-10 xs:px-8 md:px-12 lg:px-16">
            
            {/* Hamburger menu responsive */}
            <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-500 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-500 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-500 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
            </button>

            <button className="flex-col justify-center items-center hidden lg:flex" onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                {mode === "dark" 
                    ? 
                    <DarkModeIcon />
                    :
                    <LightModeIcon />
                }   
            </button>

            {/* This nav will show up in large wide screen */}
            <div className="w-full flex justify-between items-center lg:hidden">
                {/* Links */} 
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4" /> 
                    <CustomLink href="/about" title="About" className="mx-4" />
                    <CustomLink href="/projects" title="Projects" className="mx-4" />
                    <CustomLink href="/credits" title="Credits" className="ml-4"/>
                </nav>

                {/* Icons */}
                <nav className="flex items-center justify-center flex-wrap">
                    <motion.a href="https://github.com/eliram9" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mr-3"
                    >
                        <GithubIcon className="fill-dark dark:fill-light" />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/eliram9/" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3" 
                    >
                        <LinkedinIcon className="stroke-dark dark:stroke-light" />
                    </motion.a>
                    <motion.a href="https://codepen.io/eliram9" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3"
                    >
                        <CodepenIcon className="fill-dark dark:fill-light" />
                    </motion.a>
                    <motion.a href="https://www.credly.com/badges/2edd8c97-748e-4800-966d-d788818909df/linked_in?t=rsa6y9" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-7 ml-3 fill-dark dark:fill-light"
                    >
                        <AWSIcon />
                    </motion.a>

                    <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className="ml-6 flex items-center justify-center rounded-full">
                        {mode === "dark" 
                            ? 
                            <DarkModeIcon />
                            :
                            <LightModeIcon />
                        } 
                    </button>
                </nav>
            </div>

            {/* This nav will show up after clickng the humburger btn on responsive mode */}
            { isOpen 
              ?
              <motion.div 
                initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                animate={{ scale: 1, opacity:1 }}
                className="min-w-[70vw] flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                         bg-dark/90 dark:bg-light/50 rounded-lg backdrop-blur-md py-32 hidden lg:flex"
              >
                {/* Links */} 
                <nav className="flex flex-col items-center justify-center">
                    <ResponsiveCustomLink href="/" title="Home" className="" toggle={handleClick} />
                    <ResponsiveCustomLink href="/about" title="About" className="" toggle={handleClick} />
                    <ResponsiveCustomLink href="/projects" title="Projects" className="" toggle={handleClick} /> 
                    <ResponsiveCustomLink href="/credits" title="Credits" className="" toggle={handleClick} />
                </nav>

                {/* Icons */}
                <nav className="flex items-center justify-center flex-wrap mt-10"> 
                    <motion.a href="https://github.com/eliram9" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mr-3"
                    >
                        <GithubIcon className="fill-light dark:fill-dark" />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/eliram9/" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3" 
                    >
                        <LinkedinIcon className="stroke-light dark:stroke-dark" />
                    </motion.a>
                    <motion.a href="https://codepen.io/eliram9" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3"
                    >
                        <CodepenIcon className="fill-light dark:fill-dark" />
                    </motion.a>
                    <motion.a href="https://www.credly.com/badges/2edd8c97-748e-4800-966d-d788818909df/linked_in?t=rsa6y9" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-7 ml-3 fill-light dark:fill-dark"
                    >
                        <AWSIcon />
                    </motion.a>
                </nav>
                </motion.div>
              : 
              null
            }

            {/* Initials Logo */}
            <div className="absolute top-3 translate-x-[-50%] left-[50%] z-20">
                <Logo />
            </div>
        </header>
    );
}
 
export default NavBar;