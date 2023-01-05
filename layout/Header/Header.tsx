import { AppBar, Badge, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './Header.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { HeaderProps } from './Header.props';
import Image from 'next/image';
import Link from 'next/link';

export const Header = ({ }: HeaderProps) => {
    return (
        <AppBar enableColorOnDark={false} position='sticky'>
            < Toolbar >
                <Link href='/' className={styles.logo}>
                    <Image
                        src='./icons/logo.svg'
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
        </AppBar >
    );
};