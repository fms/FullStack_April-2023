import { useEffect, useState } from 'react'
import { ProductI } from '../../types/Post';

export default function ListPanel() {
  const [searchResults, setSearchResults] = useState<ProductI[]>([]);

  async function getData() {
    try {
      const res = await fetch(`https://dummyjson.com/products/`);
      if (!res.ok) throw new Error(`Failed to fetch search results`);
      const data = await res.json();
      setSearchResults(data.products);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "5px", padding: "5px" }}>
      {searchResults.map((product, index) => (
        <p style={{ color: "black", width: "200px" }} key={index}>{product.title}</p>
      ))}
    </div>
  );
}
