import React, { useRef } from 'react';
import { motion, useScroll } from "framer-motion";

import Dots from './Dots';


// Component for any role 
const Role = ({ position, company, companyLink, period, location, details }) => {
    const ref = useRef(null);

    return <div ref={ ref } className='my-4 first:mt-o last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between xs:w-[90%] sm:w-[80%] xl:w-[75%]'>
                <Dots reference={ ref } />
                <motion.div initial={{ y: 50 }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 0.5, type: "spring" }}
                
                >
                    <div className='flex justify-between'>
                        <h3 className='capitalize font-normal text-2xl text-dark  dark:text-light sm:text-xl xs:text-[16px]'>{position}&nbsp;</h3>
                        <h3 className='capitalize font-normal text-xl bg-dark text-light px-4 p-1 rounded-lg dark:border border-solid 
                                       xs:text-[12px] xs:py-1 xs:px-2 
                                       md:px-2 md:p-1 md:text-sm'
                        >{period}</h3>
                    </div>
                    <h3 className='font-semibold text-lg md:text-sm'>
                        <a href={companyLink}>{company}</a>
                            <span className='text-gold font-normal'> |</span>
                            <span className='font-normal'> {location}</span>
                    </h3>
                    <p className='font-normal w-full pt-4 pb-10 xs:text-[14px]'>{details}</p>
                </motion.div>
           </div>
}
 
const Experience = () => { 
    const ref = useRef(null); 
    const { scrollYProgress } = useScroll({ 
        target: ref,
        offset: ["start end", "center start"]
        }
    )

    return (  
        <div className='my-64'>  
            <h2 className='font-bold text-8xl mb-32 w-full text-center text-dark dark:text-light md:mb-16 md:text-6xl xs:text-4xl'>Experience</h2> 

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-[95%]'>

                <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-6 w-[2px] h-[95%] bg-dark origin-top dark:bg-light md:left-[30px] xs:left-[22px] shadow-xl shadow-rlight' />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-6'>
                    <li>
                        <Role position="Front-End & UI Developer" companyLink="https://www.boozallen.com/" 
                              company="Booz Allen Hamilton" location="Washington, DC" period="2022 - Present" 
                              details="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                       when an unknown printer took a galley of type and scrambled it to make a type specimen book. I
                                       it has survived not only five centuries,"
                        />

                        <Role position="Front-End & UI Developer" companyLink="https://www.boozallen.com/" 
                            company="Booz Allen Hamilton" location="Washington, DC" period="2022 - Present" 
                            details="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. I
                                    it has survived not only five centuries,"
                        />
                        <Role position="Front-End & UI Developer" companyLink="https://www.boozallen.com/" 
                              company="Booz Allen Hamilton" location="Washington, DC" period="2022 - Present" 
                              details="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                       when an unknown printer took a galley of type and scrambled it to make a type specimen book. I
                                       it has survived not only five centuries,"
                        />

                        <Role position="Front-End & UI Developer" companyLink="https://www.boozallen.com/" 
                            company="Booz Allen Hamilton" location="Washington, DC" period="2022 - Present" 
                            details="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. I
                                    it has survived not only five centuries,"
                        />
                        <Role position="Front-End & UI Developer" companyLink="https://www.boozallen.com/" 
                              company="Booz Allen Hamilton" location="Washington, DC" period="2022 - Present" 
                              details="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                       when an unknown printer took a galley of type and scrambled it to make a type specimen book. I
                                       it has survived not only five centuries,"
                        />

                        <Role position="Front-End & UI Developer" companyLink="https://www.boozallen.com/" 
                            company="Booz Allen Hamilton" location="Washington, DC" period="2022 - Present" 
                            details="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. I
                                    it has survived not only five centuries,"
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Experience