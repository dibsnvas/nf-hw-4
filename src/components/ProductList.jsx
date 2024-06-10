// components/ProductList.js
import React from 'react';
import { useProducts } from '../services/useProducts';
import ProductCard from './ProductForm'; // Assuming ProductCard is a component that displays individual products
import './productList.css'; // Make sure to import your CSS

const ProductList = () => {
    const { data: products, error, isLoading } = useProducts();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
