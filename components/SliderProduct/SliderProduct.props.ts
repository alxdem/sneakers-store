export interface SliderProductProps {
    items: SlideProduct[];
}

export interface SlideProduct {
    _id: string;
    lg: string;
    sm?: string;
}