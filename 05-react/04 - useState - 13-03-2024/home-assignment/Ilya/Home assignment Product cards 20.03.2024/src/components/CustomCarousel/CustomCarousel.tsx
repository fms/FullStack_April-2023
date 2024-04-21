import React from 'react';
import { Product } from '../../types/Product';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


interface CustomCarouselProps {
  products: Product[];
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ products }) => {
  return (
    <Carousel>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <p className="legend">{product.title}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;