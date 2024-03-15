import { Product } from "../../types/Product";
import styles from './ProductItem.module.scss'

interface ProductItemProps {
    product: Product;
    onDelete: (id: number) => void;
}

export default function ProductItem({ product, onDelete}: ProductItemProps) {
    return (
        <div key={product.id} className={styles[product.category]}>
            <h3>{product.title} - {product.brand}</h3>
            <p>{product.description}</p>
            <div className={styles.priceDetails}>
                <p>Price: ${product.price}, Discount: {product.discountPercentage}%</p>
                <img src={product.images[0]} />
            </div>
            <div className="wellness_details">
                <p>Rating: {product.rating}&#11088;, {product.stock} Left In Stock</p>
            </div>
            <button onClick={() => onDelete(product.id)}>Remove</button>
        </div>
    );
}