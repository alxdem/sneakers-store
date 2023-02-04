import { BreadcrumbsAppItemProps, BreadcrumbsAppProps } from './BreadcrumbsApp.props';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';

// TODO: Вернуть пропсы { items }: BreadcrumbsAppProps и решить ошибку
export const BreadcrumbsApp = ({ items }: any) => {
    const createItem = (element: BreadcrumbsAppItemProps) => {
        if (element.url) {
            return <Link key={element.anchor} href={element.url}>{element.anchor}</Link>;
        } else {
            return <span key={element.anchor}>{element.anchor}</span>;
        }
    };

    return (
        <Breadcrumbs
            aria-label='breadcrumb'
            sx={{
                fontSize: '14px',
            }}
        >
            {items.map((item: BreadcrumbsAppItemProps) => (
                createItem(item)
            ))}
        </Breadcrumbs>
    );
};