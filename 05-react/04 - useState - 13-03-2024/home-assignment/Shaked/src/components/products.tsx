import { useState } from 'react';
import './products.scss';
import { ProductI } from '../products/interface';
import { productsList } from '../products/products';

const colors = ['black', 'gray', 'lightgreen', 'purple', 'lightblue', 'pink', 'dimgray', 'cornflowerblue', 'steelblue', 'darkcyan', 'saddlebrown'];

export default function Product() {
  const [products, setProducts] = useState<ProductI[]>(productsList);
  const [previewImgs, setPreviewImgs] = useState<string[]>([]);
  const [showPreview, setShowPreview] = useState<boolean>(false);

  function deleteProduct(id: number) {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  }

  function previewImg(images: string[]) {
    setPreviewImgs(images);
    setShowPreview(true);
  }

  function cancelPreview() {
    setPreviewImgs([]);
    setShowPreview(false);
  }

  const filteredProducts = products.filter(product => product.rating >= 4.5);
  return (
    <div>
      <h1 style={{ marginLeft: "32%" }}>Products List</h1>
      {filteredProducts.map((product, index) => (
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
