import '../styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const theme = createTheme({
    palette: {
        primary: {
            light: '#ffffff',
            main: '#cfd8dc',
            dark: '#9ea7aa',
            contrastText: '#111111',
        },
        secondary: {
            light: '#f9683a',
            main: '#bf360c',
            dark: '#870000',
            contrastText: '#eeeeee',
        },
    }
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>Sneakers Shop</title>
                <meta name="description" content="The best sneakers shop" />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
