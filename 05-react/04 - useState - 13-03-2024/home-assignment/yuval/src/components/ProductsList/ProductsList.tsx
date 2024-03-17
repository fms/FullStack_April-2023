import ProductItem from '../ProductItem/ProductItem'
import { products } from '../../data/products'
import { useState } from 'react'
import style from './ProductsList.module.scss'

export default function ProductsList () {
    const [productsArray, setProductsArray] = useState(products);
    const [isFiltered, setIsFiltered] = useState(false);

    const notFilteredArr = productsArray.filter((product) => !(product.isRemoved)).map((product) => (
        <ProductItem
            key={product.id}
            product={product}
            onDelete={handleDelete}
        />
    ));

    const filteredArr = productsArray.filter((product) => product.rating >= 4.5 && !(product.isRemoved)).map((product) => (
        <ProductItem
            key={product.id}
            product={product}
            onDelete={handleDelete}
        />
    ));

    function handleDelete(id: number) {
        const index = productsArray.findIndex((product) => product.id === id);
        productsArray[index].isRemoved = true;
        setProductsArray(productsArray.filter((product) => product.id !== id));
    }

    function filter () {
        if(isFiltered) {
            setProductsArray(products);
        }
        else {
            setProductsArray(productsArray.filter((product) => product.rating >= 4.5));
        }
        setIsFiltered((prev) => !prev);
    }

    return (
        <>
            <button onClick={filter}>{isFiltered ? "Show All Items" : "Show Best Items Only"}</button>
            <div className={style.ProductsList}>
                {isFiltered ? filteredArr : notFilteredArr}
            </div>
        </>    
    );
}