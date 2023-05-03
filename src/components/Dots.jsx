import React from 'react';
import { motion, useScroll } from "framer-motion"

const Dots = ({ reference }) => {
    const { scrollYProgress } = useScroll({ 
        target: reference,
        offset: ["center end", "center center"]
        }
    )

    return (
        <figure className='absolute left-0 stroke-dark dark:stroke-gold'>
            <svg className='-rotate-90 my-1' width="75" height="75" viewBox='0 0 100 100'>
                <circle cx="75" cy="50" r="20" className='stroke-gold stroke-1 fill-none' />
                <motion.circle cx="75" cy="50" r="20" className='stroke-[2px] fill-light dark:fill-dark' 
                               style={{ 
                                   pathLength: scrollYProgress 
                                }}
                />
                <circle cx="75" cy="50" r="10" className='stroke-gold stroke-[3%] fill-gold dark:fill-light' />
            </svg>
        </figure>  
    );
}

export default Dots;       