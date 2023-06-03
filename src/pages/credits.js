import React from 'react'

import Head from 'next/head'
import { motion } from 'framer-motion';
import Layout from '@/components/Layout'
import AminatedText from '@/components/AminatedText';
import TransitionEffect from '@/components/TransitionEffect'
import { ContactForm } from '@/components/ContactForm';
import Credits from '@/components/Credits';

const credits = () => {
    return (
        <>
            <Head>
                <title>eliram9 | Credits</title>
                <meta name='description' content='any description' />
            </Head>

            {/* <TransitionEffect /> */}

            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className="pt-16">
                    <AminatedText text='Credits' className='mb-5 lg:!text-7xl sm:!text-6xl xs:!text-4xl' />
                    <p className='text-center text-dark font-large text-2xl mt-4 tracking-wide dark:text-light mb-20'>Thanks for sharing your insperations and your ideas.</p>
                    <Credits />
                    <ContactForm />
                </Layout>
            </main>
        </>
    )
}

export default credits