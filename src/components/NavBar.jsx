import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import Logo from "./Logo";
import { GithubIcon, LinkedinIcon } from "./Icons";
// import { AWSIcon, GithubIcon, LinkedinIcon, CodepenIcon } from "./Icons";


const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    // console.log(router);
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`absolute h-[1px] inline-block bg-dark left-0 -bottom-0.5
                            group-hover:w-full transition-[width] ease duration-300"
                            ${router.asPath === href ? "w-full" : "w-0"}`}
            >
                &nbsp;
            </span>
        </Link>
    );
}

const NavBar = () => {
    return (  
        <header className="w-full text-dark px-32 py-5  flex items-center justify-between">

            {/* Links */}
           <nav>
                <CustomLink href="/" title="Home" className="mr-4" />
                <CustomLink href="/about" title="About" className="mx-4" />
                <CustomLink href="/projects" title="Projects" className="mx-4" />
                <CustomLink href="/articles" title="Articles" className="ml-4"/>
            </nav>

            {/* Icons */}
            <nav className="flex items-center justify-center flex-wrap">
                <motion.a href="/" target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mr-3"

                >
                    <GithubIcon />
                </motion.a>
                <motion.a href="/" target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-3"
                >
                    <GithubIcon />
                </motion.a>
                <motion.a href="/" target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-3"
                >
                    <GithubIcon />
                </motion.a>
                <motion.a href="/" target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 ml-3"
                >
                    <GithubIcon />
                </motion.a>
            </nav>

            {/* Initials Logo */}
            <div className="absolute top-3 translate-x-[-50%] left-[50%] z-20">
                <Logo />
            </div>
        </header>
    );
}
 
export default NavBar;