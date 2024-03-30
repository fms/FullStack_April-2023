import React, { useState } from 'react';
import './App.css';
import { Product } from './types/Product';
import ProductList from './components/ProductList/ProductList';
import {products} from './data/products';



const App: React.FC = () => {
  const [productsList, setProductsList] = useState<Product[]>(products);


  const handleDeleteProduct = (productId: number) => {
    setProductsList(productsList.filter((product) => product.id !== productId));
  };

  return (
    <div className="app">
      <ProductList products={productsList} onDelete={handleDeleteProduct} />
      
    </div>
  );
};
export default App;