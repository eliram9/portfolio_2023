import React from 'react'
import { motion } from 'framer-motion';

import { AnaliticalBrain, CreativeBrain } from '../components/Icons';

const Skill = ({ name, x, y }) => {
    return (
        <motion.div className="flex items-center justify-center rounded-full text-light bg-lightDark p-3 shadow-dark cursor-pointer absolute z-1"
                    whileHover={{scale: 1.05, duration: 300}}
                    initial={{x: 0, y: 0}}
                    animate={{x: x, y: y}}
                    transition={{duration: 1}}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>  
            <h2 className='font-bold text-8xl mb-16 mt-64 w-full text-center text-dark dark:text-light md:mb-16 md:text-6xl xs:text-4xl'>Skills</h2> 
            <div className='w-full h-[75vh] relative flex items-center justify-center rounded-full'>
                {/* Brain svg icons */}
                <AnaliticalBrain className='fill-dark stroke-dark dark:fill-light dark:stroke-light' />
                <CreativeBrain  />

                <Skill name="WEB" x="0" y="0" />

                {/* Analitic */}
                <Skill name="HTML5" x="-16vw" y="-16vw" />
                <Skill name="JavaScript" x="-19vw" y="-11vw" />
                <Skill name="Node.js" x="-22vw" y="-6vw" />
                <Skill name="Express" x="-24vw" y="6vw" />
                <Skill name="jQuery" x="-22vw" y="13vw" />

                {/* Creative */}
                <Skill name="UI/UX" x="16vw" y="-16vw" />
                <Skill name="CSS3" x="19vw" y="-11vw" />
                <Skill name="Adobe Xd" x="22vw" y="-6vw" />
                <Skill name="Bootstrap" x="23vw" y="-1vw" />
                <Skill name="SCSS" x="22.5vw" y="4vw" />
                <Skill name="SCSS" x="22vw" y="9vw" />
                <Skill name="Ant Design" x="21vw" y="14vw" />
                <Skill name="Responsive Design" x="18vw" y="19vw" />
                </div>
        </>
    )
}

export default Skills