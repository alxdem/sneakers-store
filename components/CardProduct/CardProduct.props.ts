export interface CardProductProps {
    _id?: string;
    title: string;
    url?: string;
    subtitle?: string;
    brand?: string;
    photo?: string;
    price?: number;
    salePrice?: number;
    modelId?: string;
    badges?: string[];
    rating?: number;
    gender: 'M' | 'W';
    purpose?: string[];
    isDiscount?: boolean;
    isRecommend?: boolean;
}