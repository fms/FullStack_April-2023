import React, { useState } from 'react';
import "./ProductCard.css";
import { Product } from "../../types/Product";


interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { id, title, description, price, discountPercentage, rating, stock, brand, category, images } = product;
    const [mainImage, setMainImage] = useState(images[0]);

    const [showLargeImage, setShowLargeImage] = useState(false);

    const openLargeImage = () => {
        setShowLargeImage(true);
    };

    const closeLargeImage = () => {
        setShowLargeImage(false);
    };

    const handleThumbnailClick = (image: string) => {
        setMainImage(image);
    };

    return (
        <div className={`product-card ${category}`}>
            <div className="image-gallery">
                <img src={mainImage} alt={title} onClick={openLargeImage} />
                <div className="thumbnails">
                    {images.slice(1, 6).map((image, index) => (
                        <img key={index} src={image} alt={`${title} Thumbnail ${index}`} onClick={() => handleThumbnailClick(image)} />
                    ))}
                </div>
            </div>
            <div className="description-box">
                <h3>{title}</h3>
                <p>{description}</p>
                <p>Price: ${price}</p>
                <p>Discount: {discountPercentage}%</p>
                <p>Rating: {rating}</p>
                <p>Stock: {stock}</p>
                <p>Brand: {brand}</p>
                <p>Category: {category}</p>
            </div>
            {showLargeImage && (
                <div className="large-image-view" onClick={closeLargeImage}>
                    <img src={mainImage} alt={title} />
                </div>
            )}
        </div>
    );
};

export default ProductCard;