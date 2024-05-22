import { useState, useEffect } from 'react'
import ProductDetails from "../productDetails/ProductDetails";
import { Product } from '../../types/product';
import SearchOutput from '../searchOutput/SearchOutput';

export const ProductList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [productsList, setProductsList] = useState<Product[]>([]);
    const [search, setSearch] = useState("")

    function filterByRating() {
        setProductsList(productsList.filter((product) => product.rating >= 4.5))
    }

    async function fetchData(signal: AbortSignal) {
        try {
            const response = await fetch(`https://dummyjson.com/products`, { signal });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            setIsLoading(true);
            const data = await response.json();

            setProductsList(data.products);
            setIsLoading(false);

        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        fetchData(signal);

        return () => {
            controller.abort();
        }
    }, []);

    const filteredProducts = productsList.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <> 
            <SearchOutput setSearch={setSearch} />
            <button onClick={() => filterByRating()} type='button'>Filter By Rating</button>
            <ul className="productList">
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    filteredProducts.map((product) => (
                        <ProductDetails
                            key={product.id}
                            product={product}
                            productsList={productsList}
                            setProductsList={setProductsList}
                        />
                    ))
                )}
                {filteredProducts.length === 0 && !isLoading && <p>No products found.</p>}
            </ul>
        </>
    );
}
