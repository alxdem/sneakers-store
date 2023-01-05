import '../styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';

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
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
