import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Layout from '@/components/Layout';
import { GithubIcon } from '@/components/Icons';
import image from '../../public/images/projects/crypto-tracker.png';
import codebucks from '../../public/images/credits/codebucks.png';
import itay from '../../public/images/credits/itay.jpeg';

const A2 = ({ type, title, summary, img, link, githubLink }) => {
    return (
        <article className='w-full flex flex-col items-center justify-between rounded-3xl bg-light text-dark p-12 relative dark:bg-dark'>
            <Link className='w-full cursor-pointer overflow-hidden rounded-lg m-5' href={link} target="_blank">
                <Image src={img} alt={title} className='w-1/4 right-0 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full' /> 
            </Link>

            <div className='w-full flex flex-col items-center justify-between mt-4 lg:w-full lg:p-0 lg:pt-6'>
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

const Credits = () => {
    return (
        <main className='w-full mb-16 flex flex-col items-center justify-center text-center'>
            <Layout className='pt-16'>
                <div className='grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 '>
                <div className='col-span-6 sm:col-span-12'>
                            <A2 title="CodeBucks"
                                summary="My personal Crypto Tracker, single page application using React, CSS, API. 
                                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                        local currency."
                                img={codebucks}        
                                link="/"
                                githubLink="/"  
                                type="A2" 
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                        <A2 title="Itay Levy"
                                summary="My personal Crypto Tracker, single page application using React, CSS, API. 
                                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                        local currency."
                                img={itay}        
                                link="https://www.instagram.com/itaylevy2/"
                                githubLink="/"  
                                type="A2" 
                            />
                        </div>
                        {/* <div className='col-span-4 sm:col-span-12'>
                        <A2 title="QuickestWay"
                                summary="My personal Crypto Tracker, single page application using React, CSS, API. 
                                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                        local currency."
                                img={image}        
                                link="/"
                                githubLink="/"  
                                type="A2" 
                            />
                        </div> */}
                </div>
            </Layout>
        </main>
    )
}

export default Credits
