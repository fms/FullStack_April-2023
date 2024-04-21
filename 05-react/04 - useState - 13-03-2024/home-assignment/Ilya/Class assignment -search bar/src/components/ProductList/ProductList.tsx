import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Product } from '../../types/Product';
import { Button } from 'antd';
import "../ProductList/ProductList.scss" ;



interface ProductListProps {
  products: Product[];
  onDelete: (productId: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onDelete }) => {
  const [selectedRating, setSelectedRating] = useState<[number, number]>([4.5, 5]);
 

  const filteredProducts = products.filter(
    (product) =>
      product.rating >= selectedRating[0] && product.rating <= selectedRating[1]
      
  );
 

  return (
    <div>
      <div className="product-list__filters">
        <Button.Group>
          <Button onClick={() => setSelectedRating([4.5, 5])}>4.5+</Button>
          <Button onClick={() => setSelectedRating([4, 4.5])}>4.0-4.5</Button>
          <Button onClick={() => setSelectedRating([3.5, 4])}>3.5-4.0</Button>
          <Button onClick={() => setSelectedRating([0, 3.5])}>
            All ratings
          </Button>
        </Button.Group>
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;