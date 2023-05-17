import React from 'react'
import { AnaliticalBrain, CreativeBrain } from '../components/Icons';

const Skills = () => {
    return (
        <div className='my-64'>  
            <h2 className='font-bold text-8xl mb-32 w-full text-center text-dark dark:text-light md:mb-16 md:text-6xl xs:text-4xl'>Skills</h2> 
            <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-[95%]'>
                <div className='flex'>
                    <div className='w-[50%]'>
                        <AnaliticalBrain className='fill-dark stroke-dark dark:fill-light dark:stroke-light'/>
                    </div>
                    <div className='w-[50%]'>
                        <CreativeBrain  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills