import { BreadcrumbsAppItemProps } from '../components/BreadcrumbsApp/BreadcrumbsApp.props';
import { CardProductProps } from '../components/CardProduct/CardProduct.props';
import { SliderAppProps } from '../components/SliderApp/SliderApp.props';
import { Meta } from './common.interfaces';

export interface PageInterface {
    meta?: Meta;
    breadcrumbs?: BreadcrumbsAppItemProps[];
}

export interface MainPageInterface extends PageInterface {
    mainSlider?: SliderAppProps;
    recommend?: {
        _id: string;
        product: CardProductProps;
    }[];
}

export interface ProductPageInterface extends PageInterface {
    product: {
        _id?: string;
        title: string;
        sizes?: SizeProps[];
        subtitle?: string;
        brand?: string;
        photos?: {
            id: string;
            lg: string;
        }[];
        price?: number;
        salePrice?: number;
        modelId?: string;
        badges?: string[];
        rating?: number;
        gender: 'M' | 'W';
        purpose?: string[];
        isDiscount?: boolean;
        isRecommend?: boolean;
        info?: {
            _id: string;
            title: string;
            text: string;
        }[];
    }
}

export type SizeProps = {
    value: string;
    text: string;
    isAvailable: boolean;
}