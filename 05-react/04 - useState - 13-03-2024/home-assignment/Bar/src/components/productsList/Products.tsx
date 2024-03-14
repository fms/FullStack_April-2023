import { useState } from 'react'
import { products } from "../../products"
import './product.scss';
import Product from "../product/Product";

export const Products = () => {
    const [productsList, setProductsList] = useState(products)

    function removeProduct(id: number) {
        setProductsList(productsList.filter((product) => product.id !== id))
    }

    function filterByRating() {
        setProductsList(productsList.filter((product) => {
            if (product.rating >= 4.5) {
                return product
            }
        }))
    }

    function getCategoryStyle(category: string) {
        switch (category) {
            case "smartphones": {
                return { backgroundColor: "red" };
            }
            case "laptops": {
                return { backgroundColor: "blue" };
            }
            case "fragrances": {
                return { backgroundColor: "aqua" };
            }
            case "skincare": {
                return { backgroundColor: "violet" };
            }
            case "groceries": {
                return { backgroundColor: "gray" };
            }
            case "home-decoration": {
                return { backgroundColor: "green" };
            }
            default: {
                return { backgroundColor: "white" };
            }
        }
    }

    return (
        <>
            <button onClick={() => filterByRating()} type='button'>Filter</button>
            <ul className="productList">
                {productsList.map((product) => {
                    return (
                        <Product
                            product={product}
                            getCategoryStyle={getCategoryStyle}
                            removeProduct={removeProduct} />
                    )
                })}
            </ul>
        </>
    )
}