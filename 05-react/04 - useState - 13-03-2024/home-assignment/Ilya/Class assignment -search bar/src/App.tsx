import React, { useState } from 'react';
import './App.css';
import { Product } from './types/Product';
import ProductList from './components/ProductList/ProductList';
import {products} from './data/products';
import SearchBox from "../src/components/SearchBox/SearchBox";


const App: React.FC = () => {

  //const handleFilterTextChange = (filterText: string) => {
    //setFilterText(filterText);
  //};
  const [productsList, setProductsList] = useState<Product[]>(products);
  function handleDeleteProduct(productId: number) {
    setProductsList(productsList.filter((product) => product.id !== productId));
  }

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

 function handleSearch(searchTerm: string){
   if (searchTerm === '') {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter((product) =>
      [product.category, product.brand, product.title, product.description]
        .join(' ')
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filtered);
  }
  

  return (
    
  <div>
     <div className="searchbox">
      <SearchBox products={products} />
    </div>
    <div>
      <ProductList products={productsList} onDelete={handleDeleteProduct} />
    </div>

   

  </div> 


  );
};
export default App;