import { Box, CircularProgress } from '@mui/material';

export const Loader = () => {
    return (
        <Box sx={theme => ({
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            backgroundColor: `rgba(1, 1, 2, 0.2)`,
            color: 'text.main'
        })}>
            <CircularProgress color='inherit' />
        </Box>
    );
};