import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

const NavBar = () => {
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
            {/* Links */}
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/articles">Articles</Link>
            </nav>
           
           {/* Icons */}
            <nav>
                <Link href="/" target={"_blank"}>ICON</Link>
                <Link href="/" target={"_blank"}>ICON</Link>
            </nav>

            {/* Logo */}
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}

export default NavBar; 