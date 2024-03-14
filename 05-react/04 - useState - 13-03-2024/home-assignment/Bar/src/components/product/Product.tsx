import { CSSProperties } from 'react'
import { ProductDetails } from "./productDetails.ts"

interface ProductProps {
    product: ProductDetails,
    removeProduct: (id: number) => void
    getCategoryStyle: (category: string) => CSSProperties | undefined
}

const Product = ({ product, removeProduct, getCategoryStyle }: ProductProps) => {
    return (
        <li key={product.id} className="productItem" style={getCategoryStyle(product.category)}>
            <div className="productTitle">{product.title}</div>
            <div className="productDescription">{product.description}</div>
            <div className="productBrand">{`Brand: ${product.brand}`}</div>
            <div className="productPrice">{`Pirce: ${product.price}`}</div>
            <div className="productCategory">{`Category: ${product.category}`}</div>
            <div className="productDiscount">{`Discount: ${product.discountPercentage}`}</div>
            <div className="productRating">{`Raiting: ${product.rating}`}</div>
            <button onClick={() => removeProduct(product.id)} type='button'>Remove</button>
            <img src={product.thumbnail} alt="Thumbnail" className="productImage" />
            <div className="productImages">
                {product.images.map((img, index) => (
                    <img key={index} src={img} className="productImage" />
                ))}
            </div>
        </li>
    )
}
export default Product
