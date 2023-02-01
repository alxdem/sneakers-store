import { BreadcrumbsAppProps } from '../components/BreadcrumbsApp/BreadcrumbsApp.props';
import { CardProductProps } from '../components/CardProduct/CardProduct.props';
import { SliderAppProps } from '../components/SliderApp/SliderApp.props';
import { Meta } from './common.interfaces';

export interface PageInterface {
    // Перенести сюда Meta и breadcrumbs и расширять все страницы от этого интерфейса
    meta?: Meta;
    breadcrumbs?: BreadcrumbsAppProps,
};

export interface MainPageInterface extends PageInterface {
    mainSlider?: SliderAppProps;
    recommend?: ProductPageInterface[];
};

export interface ProductPageInterface extends PageInterface {
    _id?: string;
    product: CardProductProps;
};