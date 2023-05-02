import React from "react";

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

const NavBar = () => {
    // night mode or light mode
    const [mode, setMode] = useThemeSwitcher();

    return (  
        <header className="w-full text-dark px-32 py-5 flex items-center justify-between dark:text-light">

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

            {/* Initials Logo */}
            <div className="absolute top-3 translate-x-[-50%] left-[50%] z-20">
                <Logo />
            </div>
        </header>
    );
}
 
export default NavBar;