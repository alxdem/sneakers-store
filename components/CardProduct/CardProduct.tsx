import { Card, CardMedia, CardContent, Typography, Box, Rating } from '@mui/material';
import Link from 'next/link';
import { ProductBadge } from '../ProductBadge/ProductBadge';
import { CardProductProps } from './CardProduct.props';


export const CardProduct = ({ photo, title, badges, subtitle, price, salePrice, rating, url }: CardProductProps) => {
    const createBadges = () => {
        if (badges && badges?.length < 1) {
            return <></>;
        }

        return (
            <Box sx={{
                display: 'flex',
                gap: 1,
                mb: 1,
            }}>
                {badges?.map(badge => (
                    <ProductBadge key={badge} type={badge} />
                ))}
            </Box>
        );
    };

    return (
        <Link href={url || '/'}>
            <Card sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <CardMedia
                    src={photo}
                    component='img'
                    title={title}
                />
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    justifyContent: 'flex-end',
                }}>
                    {createBadges()}

                    <Typography variant="body1">{title}</Typography>
                    {subtitle && <Typography variant="body2" color='primary.dark'>{subtitle}</Typography>}

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: 1,
                        my: '4px'
                    }}>
                        {price &&
                            <Typography
                                variant="body2"
                                component="div"
                                sx={{ textDecoration: 'line-through' }}
                            >
                                ${price}
                            </Typography>
                        }
                        <Typography variant="body1" component="div" fontWeight={700}>${salePrice}</Typography>
                    </Box>

                    <Rating name="read-only" value={rating} precision={0.1} size='small' readOnly />
                </CardContent>
            </Card>
        </Link>
    );
};