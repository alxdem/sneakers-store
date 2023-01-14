import { Box, Container, Grid } from '@mui/material';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = ({ }: FooterProps): JSX.Element => {
    return (
        <Box component='footer'
            sx={{
                py: { xs: 2, sm: 3 },
                typography: 'subtitle2',
                borderTop: 1,
                borderColor: 'primary.main',
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
            }}
        >
            <Container maxWidth='xl'>
                <Grid container
                    rowSpacing={{ xs: 1, sm: 0 }}
                    columnSpacing={{ sm: 1, md: 2 }}
                    alignItems='center'
                    textAlign={{ xs: 'center', sm: 'left' }}
                >
                    <Grid
                        item
                        xs={12} sm={6}
                    >
                        © 2022 Sneakers, Inc. All Rights Reserved
                    </Grid>

                    <Grid
                        item
                        container
                        xs={12} sm={6}
                        alignItems='center'
                        justifyContent={{ xs: 'center', sm: 'flex-end' }}
                        gap={1}
                    >
                        Created by Alexey Demidov

                        <a
                            className={styles.socLink}
                            target='_blank'
                            href='https://www.linkedin.com/in/demalx/'
                            rel='noreferrer'
                        >
                            <LinkedInIcon />
                        </a>

                        <a
                            className={styles.socLink}
                            target='_blank'
                            href='https://github.com/alxdem'
                            rel='noreferrer'
                        >
                            <GitHubIcon />
                        </a>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
};