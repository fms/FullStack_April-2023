import { useEffect, useState } from 'react'
import './App.css'
import SearchPanel from './components/SearchPanel/SearchPanel';
import { useDebouncedState } from "@wojtekmaj/react-hooks";
import '../src/components/products.scss';
import { ProductI } from './types/Post';
import ListPanel from './components/productPanel/List';

function App() {
  const [id, setID] = useState(1);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useDebouncedState('', 300);
  const [product, setProduct] = useState<ProductI | null>(null);

  useEffect(() => {
    setQuery(search);
  }, [search, setQuery]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch product ${id}`);
        }
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <>
      <h1>Product List</h1>
      <ListPanel/>
      <hr />
      <input type='text' value={search} onChange={(ev) => setSearch(ev.target.value)} />
      <SearchPanel product={product} query={query} />
    </>
  )
}

export default App;
