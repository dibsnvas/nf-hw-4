// components/ProductCreationPage.js
import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../services/productService';
import Header from './Header';
import './productCreation.css';

const ProductCreationPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState('');
    const [count, setCount] = useState('');
    const [images, setImages] = useState([]);
    const queryClient = useQueryClient();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const mutation = useMutation(createProduct, {
        onSuccess: (data) => {
            console.log('Product created successfully', data);
            queryClient.invalidateQueries('products');
            navigate('/');  // Navigate to the homepage upon success
        },
        onError: (error) => {
            setError(error.message);
            console.error('Error creating product:', error);
        },
    });

    const handleImageChange = (event) => {
        setImages(event.target.files);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        console.log('Form submitted');

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('rating', rating);
        formData.append('count', count);
        for (const image of images) {
            formData.append('images', image);
        }

        console.log('Submitting form data:', Array.from(formData.entries()));
        mutation.mutate(formData);
    };

    return (
        <div className="product-creation-page">
            <Header />
            <h2>Create Product</h2>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    required
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    required
                />
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                    required
                />
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Category"
                    required
                />
                <input
                    type="number"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    placeholder="Rating"
                    required
                />
                <input
                    type="number"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                    placeholder="Count"
                    required
                />
                <input
                    type="file"
                    onChange={handleImageChange}
                    multiple
                    required
                />
                <button type="submit">Create Product</button>
            </form>
        </div>
    );
};

export default ProductCreationPage;
