export interface SliderAppProps {
    items: SlideInterface[];
};

export interface SlideInterface {
    id: string;
    type: string;
    url?: string;
    image?: {
        lg?: string;
        sm?: string;
    },
    text?: string;
    link?: {
        url: string;
        anchor: string;
    }
}