import { GridProps } from '@mui/material';
import { CardProductProps } from '../CardProduct/CardProduct.props';

export interface ProductResultProps extends GridProps {
    items: {
        _id: string;
        product: CardProductProps;
    }[];
}