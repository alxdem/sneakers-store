import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Swiper as SwiperType } from 'swiper';
import { SliderAppProps, SlideAppProps } from './SliderApp.props';
import styles from './SliderApp.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import 'swiper/css';
import 'swiper/css/navigation';


export const SliderApp = ({ items }: SliderAppProps): JSX.Element => {
    const swiperRef = useRef<SwiperType>();
    const [isStart, setIsStart] = useState<boolean>(true);
    const [isEnd, setIsEnd] = useState<boolean>(false);

    const createSlideInner = (slider: SlideAppProps) => {
        switch (slider.type) {
            case 'simple':
                return (
                    <Link className={styles.slideLink} href={slider.href || ''}>
                        {slider.bgImageUrl &&
                            <Image
                                className={styles.slideBg}
                                src={slider.bgImageUrl}
                                alt=''
                                fill
                            />}
                    </Link>
                );

            case 'withContent':
                return (
                    <Box
                        sx={{
                            py: { xs: 2, sm: 4 },
                            px: { xs: 2, sm: 8 },
                            height: '100%',
                            display: 'flex',
                            justifyContent: { md: 'flex-end' },
                            alignItems: 'center',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'primary.light',
                                opacity: { xs: 0.8, md: 0.6 },
                            }
                        }}
                        className={styles.slideInner}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                zIndex: 10,
                                maxWidth: { xs: 400, lg: 500, xl: 600 },
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            {slider.text &&
                                <Typography
                                    component='div'
                                    variant='h6'
                                    sx={{
                                        fontSize: { xs: 17, sm: 18, md: 22, lg: 26, xl: 30 },
                                        mb: { xs: 2, xl: 3 },
                                    }}
                                >
                                    {slider.text}
                                </Typography>
                            }

                            {slider.link?.anchor && slider.link.url &&
                                <Link href={slider.link.url}>
                                    <Button
                                        variant='contained'
                                        color='secondary'
                                    >
                                        {slider.link.anchor}
                                    </Button>
                                </Link>
                            }
                        </Box>

                        {slider.bgImageUrl &&
                            <Image
                                className={styles.slideBg}
                                src={slider.bgImageUrl}
                                alt=''
                                fill
                            />
                        }
                    </Box>
                );

            default:
                return <></>;
        }


    };

    return (
        <section>
            <Swiper
                className={styles.slider}
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                    setIsStart(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
            >
                {items?.map(slider => (
                    <SwiperSlide key={slider.id} className={styles.slide}>
                        {createSlideInner(slider)}
                    </SwiperSlide>
                ))}

                <IconButton
                    size='large'
                    disabled={isStart}
                    sx={{
                        display: { xs: 'none', sm: 'inline-flex' },
                        position: 'absolute',
                        zIndex: 10,
                        left: '24px',
                        top: '50%',
                        color: 'primary',
                        backgroundColor: 'primary.main',
                        transform: 'translateY(-50%)',
                        '&:hover': {
                            backgroundColor: 'primary.dark',
                        }
                    }}
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <NavigateNextIcon
                        sx={{
                            fontSize: '26px',
                            transform: 'rotate(180deg)'
                        }}
                    />
                </IconButton>

                <IconButton
                    size='large'
                    disabled={isEnd}
                    sx={{
                        display: { xs: 'none', sm: 'inline-flex' },
                        position: 'absolute',
                        zIndex: 10,
                        right: '24px',
                        top: '50%',
                        color: 'primary',
                        backgroundColor: 'primary.main',
                        transform: 'translateY(-50%)',
                        '&:hover': {
                            backgroundColor: 'primary.dark',
                        }
                    }}
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <NavigateNextIcon
                        sx={{
                            fontSize: '26px',
                        }}
                    />
                </IconButton>
            </Swiper>
        </section>
    );
};