import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderProductProps } from './SliderProduct.props';
import styles from './SliderProduct.module.css';
import Image from 'next/image';
import SwiperCore, { Thumbs } from 'swiper';
import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// TODO: Возможно, стоит объединить со слайдером на главной
// TODO: Связать два слайдера, чтобы у второго менялись стили при перелистывании первого

export const SliderProduct = ({ items }: SliderProductProps) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

    if (items.length < 1) return <></>;

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                modules={[Thumbs]}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            >
                {items.map(slide => (
                    <SwiperSlide key={slide._id}>
                        <Image
                            src={slide.lg}
                            alt=''
                            width={708}
                            height={532}
                            style={{
                                display: 'block',
                                maxWidth: '100%',
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                slidesPerView={6}
                spaceBetween={5}
                modules={[Thumbs]}
                watchSlidesProgress={true}
                style={{
                    marginTop: '5px',
                }}
            >
                {items.map(slide => (
                    <SwiperSlide key={slide._id} className={styles.thumbSlide}>
                        <Image
                            src={slide.lg}
                            alt=''
                            width={140}
                            height={110}
                            style={{
                                display: 'block',
                                maxWidth: '100%',
                                height: 'auto'
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};