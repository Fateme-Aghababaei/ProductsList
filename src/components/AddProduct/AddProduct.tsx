import React, { useState } from 'react';
import { addProduct } from '../../utils/api';
import styles from './addProduct.module.css';

const AddProduct = () => {
    const [product, setProduct] = useState({
        title: '',
        price: 0,
        description: '',
        image: '',
        category: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const jsonResponse = await addProduct(product);
            console.log(jsonResponse);
            alert(`Product added with ID: ${jsonResponse.id}`);
            setProduct({ title: '', price: 0, description: '', image: '', category: '' });
        } catch (error) {
            console.error('Failed to add the product:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
                <label>Title:</label>
                <input type="text" name="title" value={product.title} onChange={handleChange} required className={styles.input} />
            </div>
            <div className={styles.formGroup}>
                <label>Price:</label>
                <input type="number" name="price" value={product.price} onChange={handleChange} required className={styles.input} />
            </div>
            <div className={styles.formGroup}>
                <label>Description:</label>
                <textarea name="description" value={product.description} onChange={handleChange} required className={styles.input} />
            </div>
            <div className={styles.formGroup}>
                <label>Image URL:</label>
                <input type="url" name="image" value={product.image} onChange={handleChange} required className={styles.input} />
            </div>
            <div className={styles.formGroup}>
                <label>Category:</label>
                <select name="category" value={product.category} onChange={handleChange} required>
                    <option value="">Select a category</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelry</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                </select>
            </div>
            <button type="submit" className={styles.btn}>Add Product</button>
        </form>
    );
};

export default AddProduct;
