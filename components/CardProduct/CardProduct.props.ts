export interface CardProductProps {
    _id?: string;
    title: string;
    url?: string;
    subtitle?: string;
    photo?: string;
    price?: number;
    salePrice?: number;
    modelId?: string;
    badges?: string[];
    rating?: number;
}