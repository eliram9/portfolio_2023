import Head from 'next/head'
import '@/styles/globals.css';
import NavBar from '@/components/Navbar';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='font-dosis bg-light w-full min-h-screen'>
                <NavBar />
                <Component {...pageProps} />
            </main>
        </>
    )
}
