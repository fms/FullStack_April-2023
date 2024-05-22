import { Product } from "../../types/product.ts"

interface ProductProps {
    product: Product,
    productsList: Product[],
    setProductsList: React.Dispatch<React.SetStateAction<Product[]>>,
}

const ProductDetails = ({ product, productsList, setProductsList }: ProductProps) => {

    function removeProduct(id: number) {
        setProductsList(productsList.filter((product) => product.id !== id))
    }

    function getCategoryStyle(category:string) {
        switch (category) {
            case 'smartphones':
                return { backgroundColor: 'bisque' };
            case 'laptops':
                return { backgroundColor: 'lightblue' };
            case 'fragrances':
                return { backgroundColor: 'aqua' };
            case 'skincare':
                return { backgroundColor: 'violet' };
            case 'groceries':
                return { backgroundColor: 'gray' };
            case 'home-decoration':
                return { backgroundColor: 'green' };
            default:
                return { backgroundColor: 'white' };
        }
    }
    return (
        <li key={product.id} className="productItem" style={getCategoryStyle(product.category)}>
            <div className="productTitle">{product.title}</div>
            <div className="productDescription">{product.description}</div>
            <div className="productBrand">{`Brand: ${product.brand}`}</div>
            <div className="productPrice">{`Price: ${product.price}`}</div>
            <div className="productCategory">{`Category: ${product.category}`}</div>
            <div className="productDiscount">{`Discount: ${product.discountPercentage}`}</div>
            <div className="productRating">{`Rating: ${product.rating}`}</div>
            <img src={product.thumbnail} alt="Thumbnail" className="productImage" />
            <div className="productImages">
                {product.images.map((img, index) => (
                    <img key={index} src={img} className="productImage" />
                ))}
            </div>
            <button onClick={() => removeProduct(product.id)} type='button'>Remove</button>
        </li>
    )
}
export default ProductDetails
