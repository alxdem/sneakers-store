export interface CardProductProps {
    _id?: string;
    title: string;
    sizes?: SizeProps[];
    url?: string;
    subtitle?: string;
    brand?: string;
    photo?: string;
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
        title: string;
        text: string;
    }[];
}

export type SizeProps = {
    value: string;
    text: string;
    isAvailable: boolean;
}