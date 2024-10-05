import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../utils/api';
import styles from './singleCategory.module.css';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

const SingleCategory = () => {
    const { category } = useParams<{ category?: string }>();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!category) {
            console.error('No category provided');
            setLoading(false);
            return;
        }

        const fetchCategoryProducts = async () => {
            try {
                const fetchedProducts = await getProductsByCategory(category);
                setProducts(fetchedProducts);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch category products:', error);
                setLoading(false);
            }
        };

        fetchCategoryProducts();
    }, [category]);

    if (!category) {
        return <p>Please provide a category.</p>;
    }

    return (
        <div>
            <h1>Products in {category}</h1>
            {loading ? (
                <p>Loading products...</p>
            ) : (
                <div className={styles.productGrid}>
                    {products.map((product) => (
                        <div key={product.id} className={styles.productCard}>
                            <img src={product.image} alt={product.title} className={styles.productImage} />
                            <h3 className={styles.productTitle}>{product.title}</h3>
                            <p className={styles.productPrice}>${product.price}</p>
                            <p className={styles.productDescription}>{product.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SingleCategory;
