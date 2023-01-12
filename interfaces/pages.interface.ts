import { CardProductProps } from '../components/CardProduct/CardProduct.props';
import { SliderAppProps } from '../components/SliderApp/SliderApp.props';
import { Meta } from './common.interfaces';

export interface MainPageInterface {
    meta?: Meta;
    mainSlider?: SliderAppProps;
    recommend?: CardProductProps[];
};