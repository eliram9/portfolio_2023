import React, { useEffect, useRef } from 'react'
import Head from 'next/head';
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

import AminatedText from '@/components/AminatedText';
import Layout from '@/components/Layout';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import TransitionEffect from '@/components/TransitionEffect';


const AnimationNumbers = ({ value }) => {
    const ref = useRef(null); 
    
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 2000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) =>{
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        }) 
    },[springValue, value])
    
     
    return <span ref={ ref }></span> 
}

const about = () => {
    return ( 
        <>
            <Head>
                <title>eliram9 | About</title>
                <meta name='description' content='any description' />
            </Head>

            <TransitionEffect />

            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className="pt-16">
                    <AminatedText text='Passion Fuels Purpose!' className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl' />
                    {/* text */}
                    <div className='grid w-full grid-cols-8 gap-16 dark:text-light sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4'>
                            <h2 className='mb-4 text-2xl font-smibold uppercase text-lightDark dark:text-light'>Biography</h2>
                            <p className='text-dark font-medium text-lg tracking-wide dark:text-light'>Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
                               and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
                               new and innovative ways to bring my clients' visions to life.
                            </p>   
                            <p className='text-dark font-medium text-lg my-4 tracking-wide dark:text-light'> I believe that design is about more than just making things look pretty – it's about solving problems and 
                               creating intuitive, enjoyable experiences for users.
                            </p>  
                            <p className='text-dark font-medium text-lg mt-4 tracking-wide dark:text-light'>Whether I'm working on a website, mobile app, or 
                               other digital product, I bring my commitment to design excellence and user-centered thinking to 
                               every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                            </p>
                        </div>

                        {/* image */}
                        <div className='col-span-2 relative h-max p-3'>
                            <div className='absolute top-0 -right-3 -z-10 w-[103%]'>
                                {/* <Image src={profilePic} alt='Eliram Malachi' className='w-full h-auto rounded-2xl' />    */}
                                {/* <AnaliticBrain /> */}
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className='col-span-2 flex flex-col items-end justify-between'>
                            <h2 className='mb-4 text-2xl font-smibold uppercase text-lightDark'>Biography</h2>                            
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-semibold text-lightDark'>
                                    <AnimationNumbers value={50}/>+ 
                                </span>
                                <h2 className='text-xl font-medium capitalize text-lightDark'>satisfied clients</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-semibold text-lightDark'>
                                    50+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-lightDark'>satisfied clients</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center'> 
                                <span className='inline-block text-7xl font-semibold text-lightDark'>
                                    50+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-lightDark'>satisfied clients</h2>
                            </div>
                        </div>    
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main> 
        </>

    )
}

export default about;     