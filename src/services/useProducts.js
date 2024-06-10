// services/useProducts.js
import { useQuery } from 'react-query';
import axiosInstance from './axiosInstance';

const fetchProducts = async () => {
    const response = await axiosInstance.get('/products');
    return response.data;
};

export const useProducts = () => {
    return useQuery('products', fetchProducts, {
        staleTime: 60 * 1000,
        retry: 2,
    });
};
