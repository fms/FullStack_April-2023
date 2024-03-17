import { useState } from "react";
import { products } from "../../data/products";
import Image from "../Image/Image";



export default function productList() {
  const [productsArray, setproductsArray] = useState(products);




  function handleDelete(id: number) {
    setproductsArray(productsArray.filter((product) => product.id !== id));
  }

  function handleRename(id: number) {
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
      <div className="my-h1">this is my product list</div>
      <div style={{ display: "flex", flexWrap: "wrap"}}>
        {productsArray.map((product) => {
          return (
            <Image
              key={product.id}
              product={product}
              onDelete={handleDelete}
              onRename={handleRename}
            />
          );
        })}
      </div>
    </>
  );
}

