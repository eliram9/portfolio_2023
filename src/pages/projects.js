import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Layout from '@/components/Layout';
import AminatedText from '@/components/AminatedText';
import { GithubIcon } from '@/components/Icons';
import image from '../../public/images/projects/crypto-tracker.png'

const A1 = ({ type, title, summary, img, link, githubLink }) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl bg-light text-dark p-12 dark:bg-dark
                            lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'
        >
            <Link className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full' href={link} target="_blank">
                <Image src={img} alt={title} className='w-full h-auto' />   
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0'>
                {/* <span className='text-gold font-medium text-xl'>{type}</span> */}
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bolds text-gold lg:text-xl'>{title}</h2>
                </Link>   

                <p className='my-2 font-large dark:text-light lg:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={githubLink} target="_blank" className='border border-solid border-dark rounded-full p-1 mr-2 dark:border-light lg:w-[22%]'>
                        <GithubIcon className='fill-dark dark:fill-light' /> 
                    </Link>  
                    <Link href={link} target="_blank" className='ml-2 rounded-lg bg-dark text-light p-1 px-6 text-lg font-normal dark:border border-solid lg:text-sm lg:px-3 lg:p-1'>
                        Live App
                    </Link> 
                </div>
            </div>
        </article>
    )
}
 
const A2 = ({ type, title, summary, img, link, githubLink }) => {
    return (
            <article className='w-full flex flex-col items-center justify-between rounded-3xl bg-light text-dark p-12 relative dark:bg-dark'>
                <Link className='w-full cursor-pointer overflow-hidden rounded-lg' href={link} target="_blank">
                    <Image src={img} alt={title} className='w-full h-auto' /> 
                </Link>

                <div className='w-full flex flex-col items-start justify-between mt-4 lg:w-full lg:p-0 lg:pt-6'>
                    {/* <span className='text-gold font-medium text-xl'>{type}</span> */}
                    <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                        <h2 className='my-1 w-full text-left text-3xl font-bolds text-gold sm:text-[16px]'>{title}</h2>
                    </Link>

                    <p className='my-1 font-large dark:text-light lg:text-sm'>{summary}</p>
                    <div className='mt-1 flex items-center'>
                        <Link href={githubLink} target="_blank" className='border border-solid border-dark rounded-full p-1 mr-2 dark:border-light'>
                            <GithubIcon className="fill-dark dark:fill-light"/>
                        </Link>  
                        <Link href={link} target="_blank" className='ml-2 rounded-lg bg-dark text-light p-1 px-6 text-md font-normal dark:border border-solid lg:text-sm lg:px-4'>
                            Live App
                        </Link> 
                    </div>
                </div>
            </article>
    )
}
 
const Projects = () => {   
    return ( 
        <>
            <Head>
                <title>eliram9 | Projects</title>
                <meta name='description' content='any description' />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AminatedText text='Exploring Self Horizons!' className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl' />

                    <div className='grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <A1 title="Crypto Screener Application" 
                                summary="My personal Crypto Tracker, single page application using React, CSS, API. 
                                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                        local currency."
                                img={image}        
                                link="/"
                                githubLink="/"  
                                type="A1"      
                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <A2 title="QuickestWay"
                                summary="My personal Crypto Tracker, single page application using React, CSS, API. 
                                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                        local currency."
                                img={image}        
                                link="/"
                                githubLink="/"  
                                type="A2" 
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                        <A2 title="QuickestWay"
                                summary="My personal Crypto Tracker, single page application using React, CSS, API. 
                                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                        local currency."
                                img={image}        
                                link="/"
                                githubLink="/"  
                                type="A2" 
                            />
                        </div>

                        <div className='col-span-12'>
                            A1
                        </div>
                    </div>
                </Layout>
            </main>
            
        </>
    ) 
}

export default Projects; 