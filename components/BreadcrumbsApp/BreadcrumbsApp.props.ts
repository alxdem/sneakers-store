import { BreadcrumbsProps } from '@mui/material';

export interface BreadcrumbsAppProps extends BreadcrumbsProps {
    items: BreadcrumbsAppItemProps[];
}

export interface BreadcrumbsAppItemProps {
    anchor: string;
    _id?: string;
    url?: string;
}