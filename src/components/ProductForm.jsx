// components/ProductForm.js
import React from 'react';
import './productForm.css';

const ProductForm = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-card-content">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p className="price">${product.price}</p>
                <p className="category">{product.category}</p>
                <p className="rating">Rate: {product.rating.rate}</p>
                <p className="count">Count: {product.rating.count}</p>
            </div>
        </div>
    );
};

export default ProductForm;
