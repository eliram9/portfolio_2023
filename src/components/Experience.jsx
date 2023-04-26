import React, { useRef } from 'react';
import { motion, useScroll } from "framer-motion";


const Role = ({ position, company, companyLink, period, location, details }) => {
    return <li className='my-5 first:mt-o last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between '>
                <div>
                    <div className='flex justify-between'>
                        <h3 className='capitalize font-normal text-2xl text-dark'>{position}&nbsp;</h3>
                        <h3 className='capitalize font-normal text-xl bg-dark text-light px-5 py-1 rounded-lg'>{period}</h3>
                    </div>
                    <h3 className='font-semibold text-lg'>
                        <a href={companyLink}>{company}</a>
                            <span className='text-gold font-normal'> |</span>
                            <span className='font-normal'> {location}</span>
                    </h3>
                    <p className='font-normal w-full pt-4 pb-10'>{details}</p>
                </div>
           </li>
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
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>Experience</h2> 

            <div ref={ref} className='w-[75%] mx-auto relative'>

                <motion.div style={{scaleY: scrollYProgress}} className='absolute left-8 top-5  w-[2px] h-full bg-black origin-top ' />
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
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