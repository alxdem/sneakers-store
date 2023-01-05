export interface SliderAppProps {
    items: SlideAppProps[];
};

export interface SlideAppProps {
    id: string;
    type: 'simple' | 'withContent';
    href?: string;
    bgImageUrl?: string;
    text?: string;
    link?: {
        url: string;
        anchor: string;
    }
}