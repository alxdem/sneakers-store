import Head from 'next/head';
import Layout from '../layout/Layout';
import axios from 'axios';
import { SliderApp } from '../components/SliderApp/SliderApp';
import { GetStaticProps } from 'next';
import { MainPageInterface } from '../interfaces/pages.interface';
import { API } from '../helpers/api';
import { Box, Container, Typography } from '@mui/material';
import { ProductResult } from '../components/ProductResult/ProductResult';

export default function Home({ meta, mainSlider, recommend }: MainPageInterface) {
    const { title, description } = meta || {};
    const { items: sliderItems } = mainSlider || {};

    return (
        <Layout>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
            </Head>

            {sliderItems && Boolean(sliderItems.length) && <SliderApp items={sliderItems} />}

            <Box sx={{
                my: { xs: 3, sm: 5, lg: 6 }
            }}>
                <Container maxWidth='xl'>
                    <Typography
                        component='h2'
                        variant='h4'
                        color='text.main'
                        sx={{ mb: { xs: 2, sm: 4 } }}
                    >
                        Recommended
                    </Typography>
                    {recommend && <ProductResult items={recommend} />}
                </Container>
            </Box>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps<MainPageInterface> = async () => {
    const res = await axios.get<MainPageInterface>(API.pages.main);
    const { meta, mainSlider } = res.data || {};

    const products = await axios.get(API.products, {
        params: {
            'product.isRecommend': true,
        },
    });

    const recommend = products.data || {};

    return {
        props: {
            meta: meta,
            mainSlider: mainSlider,
            recommend: recommend,
        }
    };
}
