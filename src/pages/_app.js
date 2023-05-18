import Head from 'next/head'
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
    const router = useRouter();
    
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='font-dosis bg-light w-full min-h-screen dark:bg-dark'>
                <NavBar />
                <AnimatePresence mode='wait'>
                    <Component key={router.asPath} {...pageProps} />
                </AnimatePresence>
                <Footer />
            </main>
        </>
    )
}
 