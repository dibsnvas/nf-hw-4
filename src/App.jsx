import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from '../src/components/ProductList'
import ProductCreationPage from './components/productCreationPage';
import Header from './components/Header';
import './App.css';

const App = () => {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/create" element={<ProductCreationPage />} />
        </Routes>
      </div>
    );
  };
  
  export default App;