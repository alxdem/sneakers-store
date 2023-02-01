import { AppBar, Badge, Box, Container, IconButton, Toolbar, Typography, useTheme } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './Header.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { HeaderProps } from './Header.props';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ColorModeContext } from '../../context/colorMode.context';

export const Header = ({ }: HeaderProps) => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <AppBar enableColorOnDark={false} position='sticky'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Link href='/' className={styles.logo}>
                        <Image
                            src='../icons/logo.svg'
                            alt='Sneakers store'
                            width={46}
                            height={46}
                        />
                        <Typography
                            variant='h6'
                            noWrap
                            component='div'
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            Sneakers
                        </Typography>
                    </Link>

                    <Box sx={{ flexGrow: 1 }} />

                    <IconButton
                        sx={{ opacity: 0.6 }}
                        size='large'
                        aria-label='toggle color mode'
                        color='inherit'
                        onClick={colorMode.toggleColorMode}
                    >
                        {theme.palette.mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
                    </IconButton>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
                            <Badge badgeContent={4} color='error'>
                                <FavoriteIcon />
                            </Badge>
                        </IconButton>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
                            <Badge badgeContent={1} color='error'>
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar >
            </Container>
        </AppBar >
    );
};