import { FormControlLabel, Radio, Typography } from '@mui/material';
import { RadioAppProps } from './RadioApp.types';

export const RadioApp = (props: RadioAppProps) => {
    return (
        <FormControlLabel
            {...props}
            sx={{
                margin: 0,
                padding: 0,
                width: props.width,
            }}
            control={<Radio sx={{ display: 'none' }} />}
            label={<Typography
                component='span'
                sx={{
                    color: 'text.main',
                    fontSize: 20,
                    minHeight: { xs: '40px', sm: 'auto' },
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    borderRadius: 1,
                    border: '1px solid',
                    borderColor: 'primary.dark',
                    '.Mui-checked + &': {
                        backgroundColor: 'primary.dark',
                        borderColor: 'primary.dark'
                    },
                    '.Mui-disabled + &': {
                        opacity: 0.3,
                    }
                }}
            >{props.label}</Typography>}
        ></FormControlLabel>
    );
};