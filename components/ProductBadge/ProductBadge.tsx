import { Typography } from '@mui/material';
import { BadgeProps } from './ProductBadge.props';

export const ProductBadge = ({ type }: BadgeProps) => {
    const createText = () => {
        switch (type) {
            case 'new':
                return 'New';
            case 'sale':
                return 'Sale';
            default:
                return type;
        }
    };

    const bgColor = () => {
        switch (type) {
            case 'new':
                return 'success.dark';
            case 'sale':
                return 'error.main';
            default: 'primary.light';
        }
    };

    return (
        <Typography
            variant="caption"
            sx={{
                padding: '1px 8px',
                bgcolor: bgColor(),
                borderRadius: 1,
                fontSize: 14,
                color: 'white'
            }}
        >
            {createText()}
        </Typography>
    );
};