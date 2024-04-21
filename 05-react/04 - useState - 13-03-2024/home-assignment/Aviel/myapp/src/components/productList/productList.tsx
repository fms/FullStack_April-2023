import { useState } from "react";
import { products } from "../../data/products";

export default function productList() {
  const [productsArray, setproductsArray] = useState(products);

  function handleDelete(id: number) {
    console.log("delete");
    setproductsArray(productsArray.filter((product) => product.id !== id));
  }

  function handleRename(id: number) {
    console.log("rename");
    const newName = prompt("New name, please");
    if (newName) {
      setproductsArray(
        productsArray.map((product) => {
          if (product.id === id) {
            product.title = newName;
            // return {...product, title: newName};
          }

          return product;
        })
      );
    }
  }

  return (
    <>
      <div>productList</div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {productsArray.map((product) => {
          return (
            <div
              key={product.id}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h3>
                {product.id} - {product.title}
              </h3>
              <img src={product.url} alt={product.title} />
              <div>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
                <button onClick={() => handleRename(product.id)}>Rename</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
