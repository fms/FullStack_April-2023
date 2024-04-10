
import React from 'react';
import "./ProductCard.scss";
import { Product } from "../../types/Product";
import './ProductCard.scss';
import { Button } from 'antd';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


interface ProductCardProps {
  product: Product;
  onDelete: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onDelete }) => {
  return (


    <div className={`product-card product-card--${product.category}`}>
      <Carousel showThumbs={false} showStatus={true}>
        {product.images.map((image, index,) => (
          <div key={index}>
            <img src={image} alt={product.title} />
          </div>
        ))}
      </Carousel>
      
      <div className="product-card__info">
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__description">{product.description}</p>
        <p className="product-card__price">
          ${product.price}
          {product.discountPercentage > 0 && (
            <span className="product-card__discount">
              -{product.discountPercentage}%
            </span>
          )}
        </p>
        <p className="product-card__rating">
          Rating: {product.rating}<span className="star-icon">★</span>
          <span className="product-card__out-of">/ 5.0</span>
        </p>
        <p className="product-card__stock">Stock: {product.stock}</p>
        <p className="product-card__brand">Brand: {product.brand}</p>
        <p className="product-card__category">Category: {product.category}</p>
      </div>
      <div className="product-card__actions">
        <Button type="danger" onClick={() => onDelete(product.id)}>
          Delete
        </Button>
      </div>
      
    </div>
  );
};

export default ProductCard;