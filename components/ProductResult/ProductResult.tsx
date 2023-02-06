import { Grid } from '@mui/material';
import { CardProduct } from '../CardProduct/CardProduct';
import { ProductResultProps } from './ProductResult.props';

export const ProductResult = ({ items }: ProductResultProps) => {
    if (!items || items.length < 1) return <></>;

    return (
        <Grid container
            columnSpacing={2}
            rowSpacing={2}
        >
            {items.map(item => {
                const { title, subtitle, salePrice, price, rating, badges, modelId, photo, _id } = item.product || {};

                return (
                    <Grid key={item._id} item xs={12} sm={6} md={3}>
                        <CardProduct
                            photo={photo}
                            title={title}
                            subtitle={subtitle}
                            salePrice={salePrice}
                            price={price}
                            rating={rating}
                            badges={badges}
                            url={`${modelId}/${_id}`}
                        />
                    </Grid>
                );
            })}
        </Grid>
    );
};