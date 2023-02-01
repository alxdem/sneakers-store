import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BreadcrumbsAppProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    items: BreadcrumbsAppItemProps[];
}

export interface BreadcrumbsAppItemProps {
    anchor: string;
    url?: string;
}