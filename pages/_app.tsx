import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ColorModeContextProvider } from '../context/colorMode.context';

export default function App({ Component, pageProps }: AppProps) {

    return (
        <ColorModeContextProvider>
            <Head>
                <title>Sneakers Shop</title>
                <meta name="description" content="The best sneakers shop" />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Component {...pageProps} />
        </ColorModeContextProvider>
    );
}
