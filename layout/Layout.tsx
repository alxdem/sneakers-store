import styles from './Layout.module.css';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { LayoutProps } from './Layout.props';

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <>
            <div className={styles.app}>
                <Header />
                <main className={styles.main}>
                    {children}
                </main>
                <Footer />
            </div></>
    );
};

export default Layout;