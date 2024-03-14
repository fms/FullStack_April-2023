import { Product } from "../../types/Product";
import './ProductItem.module.scss'

interface ProductItemProps {
    product: Product;
    onDelete: (id: number) => void;
}

export default function ProductItem({ product, onDelete}: ProductItemProps) {
    return (
        <div key={product.id} className={product.category}>
            <h3>{product.title} - {product.brand}</h3>
            <p>{product.description}</p>
            <div className="details">
                <p>Price: ${product.price}, Discount: {product.discountPercentage}%</p>
            </div>
            <img src={product.images[0]} />
            <button onClick={() => onDelete}>Remove</button>

        </div>
    )
}
