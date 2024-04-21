import { product } from "../../types/product";
import { products } from "../../data/products";

interface productPros {
  product: product;
  onDelete: (id: number) => void;
  onRename: (id: number) => void;
}

export default function Image({ product, onDelete, onRename }: productPros) {
  return (
    <div key={product.id} style={{ display: "flex", flexDirection: "column" }}>
      <h3>
        {product.id} - {product.title}
      </h3>
      <img src={product.url} alt={product.title} />
      <div>
        <button onClick={() => onDelete(product.id)}>Delete</button>
        <button onClick={() => onRename(product.id)}>Rename</button>
      </div>
    </div>
  );
}
