import React, { useState } from 'react';
import ProductCard from "./components/ProductCard/ProductCard";
import { products } from './data/products';
import "./App.css";
import { Product } from './types/Product';

const App: React.FC = () => {
    return (
        <div className="product-grid">
            {products.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default App;



