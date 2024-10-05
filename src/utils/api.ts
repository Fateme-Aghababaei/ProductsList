const BASE_URL = 'https://fakestoreapi.com';

// Fetch all products
export const getProducts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/products`);
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

// Fetch single product by ID
export const getProductById = async (id: string) => {
    try {
        const response = await fetch(`${BASE_URL}/products/${id}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch product with ID ${id}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
        throw error;
    }
};

// Fetch product categories
export const getCategories = async () => {
    try {
        const response = await fetch(`${BASE_URL}/products/categories`);
        if (!response.ok) {
            throw new Error('Failed to fetch categories');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

// Fetch products by category
export const getProductsByCategory = async (category: string) => {
    try {
        const response = await fetch(`${BASE_URL}/products/category/${category}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch products for category ${category}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching products for category ${category}:`, error);
        throw error;
    }
};

// Add a new product
export const addProduct = async (product: {
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
}) => {
    try {
        const response = await fetch(`${BASE_URL}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        if (!response.ok) {
            throw new Error('Failed to add product');
        }
        return await response.json();
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};

