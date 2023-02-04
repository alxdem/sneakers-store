export interface CardProductProps {
    _id?: string;
    title: string;
    url?: string;
    subtitle?: string;
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
}

// TODO: photos - убрать и ипользовать ключ photo. Добавить картинки ключу photo