import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ColorModeContextProvider } from '../context/colorMode.context';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Loader } from '../components/Loader/Loader';

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const handleRouteChange = () => {
            setIsLoading(true);
        };

        const handleRouteComplete = () => {
            setIsLoading(false);
        };

        router.events.on('routeChangeStart', handleRouteChange);
        router.events.on('routeChangeComplete', handleRouteComplete);

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
            router.events.off('routeChangeComplete', handleRouteComplete);
        }
    }, []);


    return (
        <ColorModeContextProvider>
            <Head>
                <title>Sneakers Shop</title>
                <meta name="description" content="The best sneakers shop" />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            {isLoading && <Loader />}
            <Component {...pageProps} />
        </ColorModeContextProvider>
    );
}
