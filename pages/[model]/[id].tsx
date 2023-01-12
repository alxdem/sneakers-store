import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Head from 'next/head';
import { API } from '../../helpers/api';
import Layout from '../../layout/Layout';
import { CardProductProps } from '../../components/CardProduct/CardProduct.props';

export default function ProductPage({ title, subtitle, brand }: CardProductProps) {
    return (
        <Layout>
            <Head>
                <title>{title}</title>
                <meta name='description' content={subtitle} />
            </Head>
            brand: {brand}
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = [];

    const { data } = await axios.get<CardProductProps[]>(API.products);
    paths = paths.concat(data.flatMap(product => `/${product.modelId}/${product._id}`));

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