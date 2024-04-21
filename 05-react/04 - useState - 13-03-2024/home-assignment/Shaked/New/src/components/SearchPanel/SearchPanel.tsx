import { useEffect, useState } from 'react'
import { ProductI } from '../../types/Post';

interface SearchPanelProps {
  query: string;
  product: ProductI | null;
}

export default function SearchPanel({ query, product }: SearchPanelProps) {
    const [searchResults, setSearchResults] = useState<ProductI[]>([]);
    const [previewImgs, setPreviewImgs] = useState<string[]>([]);
    const [showPreview, setShowPreview] = useState<boolean>(false);
  
    function deleteProduct(id: number) {
      const updatedProducts = searchResults.filter(product => product.id !== id);
      setSearchResults(updatedProducts);
    }
  
    function previewImg(images: string[]) {
      setPreviewImgs(images);
      setShowPreview(true);
    }
  
    function cancelPreview() {
      setPreviewImgs([]);
      setShowPreview(false);
    }
  
    async function getData(query: string, id: number) {
      try {
        const res = await fetch(`https://dummyjson.com/products/search?q=${query}&id=${id}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch search results for query: ${query}`);
        }
        const data = await res.json();
        setSearchResults(data.products);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    }
  
    useEffect(() => {
      if (query && product) {
        getData(query, product.id);
      } else {
        setSearchResults([]);
      }
    }, [query, product]);
  
    const colors = ['black', 'gray', 'lightgreen', 'purple', 'lightblue', 'pink', 'dimgray', 'cornflowerblue', 'steelblue', 'darkcyan', 'saddlebrown'];
  
    return (
      <div>
        <h1>Search Results</h1>
        {searchResults.map((product, index) => (
        <div style={{ backgroundColor: colors[index % colors.length], opacity: "0.8" }} className='wrapper' key={index}>
        <h1>{product.title}</h1>
        <img src={product.thumbnail} alt={product.title} />
        <h3>Description of {product.brand}<br /></h3>
        <textarea>{product.description}</textarea>
        <p>Price {product.price}</p>
        <p>Discount percentage {product.discountPercentage}</p>
        <p>⭐Rating⭐ {product.rating}</p>
        <p>Stock {product.stock}</p>
        <button onClick={() => deleteProduct(product.id)}>Delete {product.title}</button>
        <button onClick={() => previewImg(product.images)}>Preview Image</button>
        {showPreview && previewImgs.map((img, index) => (
          <img key={index} src={img} alt={`Preview ${index}`} />
        ))}
        <button onClick={cancelPreview}>Less</button>
        <hr/>
      </div>
        ))}
      </div>
    );
  }

  
  