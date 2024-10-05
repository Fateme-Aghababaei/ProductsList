import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../utils/api';
import styles from './categories.module.css';

const Categories = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const fetchedCategories = await getCategories();
                setCategories(fetchedCategories);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div>
            <h1>Categories</h1>
            {loading ? (
                <p>Loading categories...</p>
            ) : (
                <ul className={styles.categoryList}>
                    {categories.map((category, index) => (
                        <li key={index} className={styles.categoryItem}>
                            <Link to={`/category/${category}`} className={styles.categoryLink}>{category}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Categories;
