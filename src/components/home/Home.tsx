import { useState, useEffect } from 'react';
import { getProducts } from '../../utils/api';
import { Link } from 'react-router-dom';
import styles from './home.module.css';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

const Home = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await getProducts();
                setProducts(fetchedProducts);
            } catch (error) {
                console.error('Failed to load products:', error);
            }
            setLoading(false);
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            {loading ? (
                <p>Loading products...</p>
            ) : (
                <div className={styles.container}>
                    {products.map((product) => (
                        <div key={product.id} className={styles.productCard}>
                            <img src={product.image} alt={product.title} className={styles.productImage} />
                            <div className={styles.productInfo}>
                                <h3 className={styles.productTitle}>{product.title}</h3>
                                <p className={styles.productPrice}>${product.price}</p>
                                <p className={styles.productDescription}>{product.description}</p>
                                <Link to={`/product/${product.id}`} className={styles.viewDetails}>View Details</Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
