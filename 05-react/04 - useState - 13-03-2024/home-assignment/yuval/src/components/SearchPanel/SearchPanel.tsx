import { useEffect, useMemo, useState } from "react";
import Product from "../../types/Product";
import ProductItem from "../ProductItem/ProductItem";
import style from './SearchPanel.module.scss';

interface SearchPanelProps {
    query: string;
}

export default function SearchPanel({ query }: SearchPanelProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [productsArray, setProductsArray] = useState(products);
    const [removedItemIds, setRemovedItemIds] = useState<number[]>([]);
    const [isFiltered, setIsFiltered] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        fetch(`https://dummyjson.com/products/search?q=${query}&limit=100`, {
        signal: controller.signal,
        })
        .then((res) => res.json())
        .then((obj) => {
            setProducts(obj.products);
            setProductsArray(obj.products);
        })

        return () => {
        controller.abort();
        };
    }, [query]);

    const filteredArr = useMemo(() => {
        return productsArray.filter((product) => product.rating >= 4.5 && !product.isRemoved && !removedItemIds.includes(product.id)).map((product) => (
            <ProductItem
                key={product.id}
                product={product}
                onDelete={handleDelete}
            />
        ));
    }, [productsArray]);

    const notFilteredArr = useMemo(() => {
        return productsArray.filter((product) => !product.isRemoved && !removedItemIds.includes(product.id)).map((product) => (
            <ProductItem
                key={product.id}
                product={product}
                onDelete={handleDelete}
            />
        ));
    }, [productsArray]);


    function handleDelete(id: number) {
        const updatedRemovedItemIds = [...removedItemIds, id];
        setRemovedItemIds(updatedRemovedItemIds);
        const updatedProductsArray = productsArray.map(product => {
            if (product.id === id) {
                return { ...product, isRemoved: true };
            }
            return product;
        });
        setProductsArray(updatedProductsArray);
    }

    function filter () {
        if(isFiltered) {
            setProductsArray(products);
        }
        else {
            setProductsArray(products.filter((product) => product.rating >= 4.5));
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
