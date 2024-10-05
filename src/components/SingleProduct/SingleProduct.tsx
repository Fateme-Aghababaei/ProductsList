import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../utils/api';
import styles from './singleProduct.module.css';

interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}

const SingleProduct = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        if (!id) {
            setError('Product ID is required');
            setLoading(false);
            return;
        }

        const fetchProduct = async () => {
            try {
                const fetchedProduct = await getProductById(id);
                setProduct(fetchedProduct);
                setLoading(false);
            } catch (err) {
                console.error('Failed to fetch product:', err);
                setError('Failed to load product');
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        product && (
            <div className={styles.product}>
                <img src={product.image} alt={product.title} className={styles.image} />
                <div className={styles.details}>
                    <h1>{product.title}</h1>
                    <p className={styles.price}>${product.price}</p>
                    <p className={styles.category}>{product.category}</p>
                    <p>{product.description}</p>
                </div>
            </div>
        )
    );
};

export default SingleProduct;
