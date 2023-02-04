import { BoxProps } from '@mui/material';

export interface AccordionAppProps extends BoxProps {
    items: {
        _id: string;
        title: string;
        text: string;
    }[];
}