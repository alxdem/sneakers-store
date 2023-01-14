import Head from 'next/head';
import Layout from '../layout/Layout';
import axios from 'axios';
import { SliderApp } from '../components/SliderApp/SliderApp';
import { GetStaticProps } from 'next';
import { MainPageInterface } from '../interfaces/pages.interface';
import { API } from '../helpers/api';
import { Box, Container, Typography, Grid } from '@mui/material';
import { CardProduct } from '../components/CardProduct/CardProduct';

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

            {recommend && Boolean(recommend.length > 0) &&
                <Box sx={{
                    my: { xs: 3, sm: 5, lg: 6 }
                }}>
                    <Container maxWidth='xl'>
                        <Typography component='h2' variant='h4' color='text.main'>Recommended</Typography>
                        <Grid container
                            columnSpacing={2}
                            rowSpacing={2}
                            mt={{ xs: 2 }}
                        >
                            {recommend.map(product => (
                                <Grid key={product._id} item xs={12} sm={6} md={3}>
                                    <CardProduct
                                        photo='/pics/sneakers/asics-kinsei-blast-le-blue.jpg'
                                        title={product.title}
                                        subtitle={product.subtitle}
                                        gender={product.gender}
                                        salePrice={product.salePrice}
                                        price={product.price}
                                        rating={product.rating}
                                        badges={product.badges}
                                        url={`${product.modelId}/${product._id}`}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
            }
        </Layout>
    );
}

export const getStaticProps: GetStaticProps<MainPageInterface> = async () => {
    const res = await axios.get<MainPageInterface>(API.pages.main);
    const { meta, mainSlider } = res.data || {};

    const products = await axios.get(API.products, {
        params: {
            isRecommend: true
        }
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
