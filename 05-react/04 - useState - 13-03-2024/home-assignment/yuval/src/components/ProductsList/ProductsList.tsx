import ProductItem from '../ProductItem/ProductItem'
import { products } from '../../data/products'
import { useState } from 'react'
import style from './ProductsList.module.scss'

export default function ProductsList () {
    const [productsArray, setProductsArray] = useState(products);

    function handleDelete(id: number) {
        setProductsArray(productsArray.filter((product) => product.id !== id));
    }

    function filter () {
        setProductsArray(productsArray.filter((product) => product.rating >= 4.5));
    }

    return (
        <>
            <button onClick={filter}>Show Best Items Only</button>
            <div className={style.ProductsList}>
                {productsArray.map((product) => (
                            <ProductItem
                                key={product.id}
                                product={product}
                                onDelete={handleDelete}
                            />
                ))}
            </div>
        </>    
    );
}