import styles from './Layout.module.css';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { LayoutProps } from './Layout.props';
import { Box } from '@mui/material';

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <Box className={styles.app} sx={{ backgroundColor: 'info.main' }}>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </Box>
    );
};

export default Layout;