import ProductItem from '../ProductItem/ProductItem'
import { products } from '../../data/products'

export default function () {
    function handleDelete(id: number) {

    }

    return (
        <div>
            {products.map((product) => (
                        <ProductItem
                            key={product.id}
                            product={product}
                            onDelete={() => handleDelete} 
                        />
            ))}
        </div>
    )
}
