import Style from "./MainProductWrapper.module.scss";
import { ProductsData } from "../../Data/ProductsData/ProductsData";
import Products from "../Products/Products";
import { useState } from "react";

function MainProductWrapper() {
  const [productsDom, setProductsDom] = useState(ProductsData);
  const [inProduct, setInProduct] = useState(false);

  const getProduct = (id: number): any => {
    setInProduct(!inProduct);
    setProductsDom(productsDom.filter((product) => product.id === id));
  };

  const removeProduct = (id: number): any => {
    setProductsDom(productsDom.filter((product) => product.id !== id));
  };

  const backToProducts = () => {
    setInProduct(!inProduct);
  };

  const getProducts = () => {
    {
      return productsDom.map((product) => {
        return (
          <>
            <div className={Style.thumbnailWrapper} key={product.id}>
              <h1>{product.title}</h1>
              <button onClick={() => getProduct(product.id)}>
                <img
                  src={product.thumbnail}
                  alt={product.brand}
                  className={Style.thumbnailImage}
                />
              </button>
              <button onClick={() => removeProduct(product.id)}>
                Remove Product
              </button>
            </div>
          </>
        );
      });
    }
  };

  return (
    <>
      {!inProduct && getProducts()}

      {inProduct && <Products product={productsDom[0]} />}
    </>
  );
}

export default MainProductWrapper;
