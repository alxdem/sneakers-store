import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Head from 'next/head';
import { API } from '../../helpers/api';
import Layout from '../../layout/Layout';
import { Container } from '@mui/system';
import { BreadcrumbsApp } from '../../components/BreadcrumbsApp/BreadcrumbsApp';
import { ProductPageInterface } from '../../interfaces/pages.interface';
import { Box, Radio, RadioGroup, Rating, Typography, Button } from '@mui/material';
import { priceFormatt } from '../../helpers/utils';
import { useState } from 'react';
import { RadioApp } from '../../components/RadioApp/RadioApp';
import { SliderProduct } from '../../components/SliderProduct/SliderProduct';
import { AccordionApp } from '../../components/AccordionApp/AccordionApp';

export default function ProductPage({ meta, product, breadcrumbs }: ProductPageInterface) {
    const { title: metaTitle, description: metaDescription } = meta || {};
    const { title, subtitle, salePrice, price, rating, sizes, photos, info } = product || {};

    const [selectedSize, setSelectedSize] = useState<string>('');

    const sizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedSize(e.target.value);
    };

    return (
        <Layout>
            <Head>
                <title>{metaTitle}</title>
                <meta name='description' content={metaDescription} />
            </Head>
            <Container maxWidth='lg'>
                {breadcrumbs && (
                    <BreadcrumbsApp sx={{ mt: '20px' }} items={breadcrumbs} />
                )}

                <Box sx={{
                    display: 'flex',
                    mt: '20px',
                    mb: 6,
                    gap: 3,
                    flexDirection: { md: 'row', xs: 'column' }
                }}>
                    <Box sx={{
                        width: 'auto',
                        flexGrow: 1,
                        flexShrink: 1,
                        overflow: 'hidden',
                        marginX: { xs: -2, sm: 0 }
                    }}>
                        {photos && <SliderProduct items={photos} />}

                        {info &&
                            <AccordionApp
                                sx={{ mt: 4 }}
                                items={info}
                            />}
                    </Box>

                    <Box sx={{
                        width: { lg: '420px', md: '300px' },
                        flexShrink: 0,
                    }}>
                        {title &&
                            <Typography
                                component='h1'
                                variant='h4'
                                sx={{ mb: '8px', color: 'text.main' }}
                            >
                                {title}
                            </Typography>}
                        {subtitle &&
                            <Typography
                                component='p'
                                variant='subtitle2'
                                color='text.main'
                            >
                                {subtitle}
                            </Typography>}

                        <Box sx={{
                            backgroundColor: 'primary.light',
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: '10px',
                            mt: '16px',
                        }}>
                            {salePrice &&
                                <Typography
                                    component='div'
                                    variant='h5'
                                    sx={{
                                        color: 'text.main',
                                    }}
                                >
                                    {priceFormatt(salePrice)}
                                </Typography>}
                            {Boolean(price) && price !== salePrice &&
                                <Typography
                                    component='div'
                                    variant='subtitle1'
                                    sx={{
                                        textDecoration: 'line-through',
                                        color: 'text.main',
                                        opacity: 0.7,
                                    }}
                                >
                                    {price && priceFormatt(price)}
                                </Typography>}

                            {rating &&
                                <Box sx={{
                                    ml: 'auto',
                                    alignSelf: 'center',
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: 'text.main',
                                    opacity: 0.8,
                                }}>
                                    <Rating
                                        name="product-rating"
                                        value={rating}
                                        precision={0.1}
                                        readOnly
                                        size='small'
                                        sx={{
                                            color: 'text.main',
                                            mr: '4px'
                                        }}
                                    />
                                    <Typography component='span' variant='subtitle1'>36</Typography>
                                </Box>}
                        </Box>

                        {sizes &&
                            <RadioGroup
                                value={selectedSize}
                                onChange={sizeChange}
                                name='size'
                                row
                                sx={{
                                    mt: 2,
                                    gap: 1,
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(4, 1fr)',
                                }}
                            >
                                {sizes.map(size => (
                                    <RadioApp
                                        key={size.value}
                                        value={size.value}
                                        control={<Radio />}
                                        label={size.text}
                                        disabled={!size.isAvailable}
                                    />
                                ))}
                            </RadioGroup>
                        }

                        <Button
                            size='large'
                            disabled={!selectedSize}
                            sx={{
                                backgroundColor: 'secondary.main',
                                color: 'secondary.contrastText',
                                width: '100%',
                                mt: 4,
                                '&:disabled': {
                                    backgroundColor: 'secondary.main',
                                    color: 'secondary.contrastText',
                                },
                                '&:hover': {
                                    backgroundColor: 'secondary.dark',
                                }
                            }}
                            variant='contained'
                        >
                            {selectedSize ? 'Add to card' : 'Select size'}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = [];

    const { data } = await axios.get<any[]>(API.products);
    paths = paths.concat(data.flatMap(info => {
        return `/${info.product.modelId}/${info._id}`;
    }));


    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        };
    }

    try {
        const { data } = await axios.get(API.products + params.id);

        return {
            props: data
        };
    } catch {
        return {
            notFound: true
        };
    }
};