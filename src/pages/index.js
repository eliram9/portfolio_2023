import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/me-pic-1.webp';
import AminatedText from '@/components/AminatedText';
import { FileDownload, Email } from '@/components/Icons';
import { motion } from "framer-motion";

export default function Home() {
    return (
        <>
            <Head>
                <title>eliram9 | Home Page</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <main className="flex items-center text-dark w-full min-h-screen">
                <Layout className='pt-0'>
                    <div className='flex items-center justify-between w-full'>
                        <div className='w-[35%]'>
                            <Image src={profilePic} alt='eliram9' className='w-full h-auto' priority />
                        </div>
                        <div className='w-1/2 flex flex-col itens-center self-center'>
                            <AminatedText className='!text-7xl !text-left' text="Turning Vision Into Reality With Code And Design" />
                            <h1></h1>
                            <p className='text-xl subpixel-antialiased my-4 font-light tracking-wide dark:text-light'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                               Explore my latest projects and articles, showcasing my expertise in React.js and web development.
                            </p>

                        {/* Buttons */}
                        <div className='flex items-center self-start mt-2'>
                            <motion.a href="/Eliram Malachi - Resume.pdf" target={'_blank'}
                                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-xl font-normal tracking-wide mr-3
                                hover:bg-lightDark shadow-lg shadow-gray-600 dark:border border-solid dark:shadow-none'
                                whileHover={{ y: +2 }}
                                download={true}
                            >
                                Resume<FileDownload className='w-5 ml-2' />
                            </motion.a>
                            <motion.a href="mailto:eliram9@gmail.com" target={'_blank'}
                                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-xl font-normal tracking-wide ml-3
                                hover:bg-lightDark shadow-lg shadow-gray-600 dark:border border-solid dark:shadow-none'
                                whileHover={{ y: +2 }}
                            >
                                Contact<Email className='w-6 ml-2' />
                            </motion.a>
                        </div>
                        </div>
                    </div>
                </Layout>
            </main>
        </> 
    )
}