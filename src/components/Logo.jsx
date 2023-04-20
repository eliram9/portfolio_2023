import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-between mt-2 text-2xl font-medium'>
        <MotionLink href="/" className='w-16 h-16 bg-dark text-gold flex items-center justify-center rounded-full'
            whileHover={{ scale: 1.1, color: "#3d3f3a", backgroundColor: "#d29829", fontSize: "25px", fontWeight: 700,
                          transition: { duration: 1, repeat: Infinity },
                          // animate: [{ opacity: 1, scale: 1 }, ]
                          // find a better effect in the future!
            }}
        >
            E M
        </MotionLink>
    </div>
  )
}

export default Logo