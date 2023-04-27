import React from 'react';
import { motion, useScroll } from "framer-motion"

const Dots = ({ reference }) => {
    const { scrollYProgress } = useScroll({ 
        target: reference,
        offset: ["center end", "center center"]
        }
    )

    return (
        <figure className='absolute left-0 stroke-dark'>
            <svg className='-rotate-90 my-1' width="75" height="75" viewBox='0 0 100 100'>
                <circle cx="75" cy="50" r="20" className='stroke-gold stroke-1 fill-none' />
                <motion.circle cx="75" cy="50" r="20" className='stroke-[2px] fill-light' 
                               style={{ 
                                   pathLength: scrollYProgress 
                                }}
                />
                <circle cx="75" cy="50" r="10" className='stroke-gold stroke-[1px] fill-gold' />
            </svg>
        </figure>  
    );

}

export default Dots;       