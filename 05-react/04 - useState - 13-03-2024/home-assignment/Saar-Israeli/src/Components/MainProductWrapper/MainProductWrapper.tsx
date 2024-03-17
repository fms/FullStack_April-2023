import './MainProductWrapper.scss';
import { ProductsData } from "../../Data/ProductsData/ProductsData";
import Products from "../Products/Products";
import { useState } from "react";
import ProductModule from "../../Module/ProductModule/ProductModule";

let oldData :ProductModule[];

function MainProductWrapper() {
  const [productsDom, setProductsDom] = useState(ProductsData);
  const [inProduct, setInProduct] = useState(false);



  const getProduct = (id: number): any => {
    setInProduct(!inProduct);
    oldData = productsDom;
    setProductsDom(productsDom.filter((product) => product.id === id));
  };

  const removeProduct = (id: number): any => {
    oldData = productsDom;
    setProductsDom(productsDom.filter((product) => product.id !== id));
  };

  const backToProducts = () :any => {
    setProductsDom(oldData);
    setInProduct(!inProduct);
  };

  const filterByRating = () => {
    setProductsDom(productsDom.filter((product) => {
        if (product.rating >= 4.5) {
            return product;
        }
    }))
}

function getCategoryStyle(category: string) {
  switch (category) {
      case "smartphones": {
          return { color: "red" };
      }
      case "laptops": {
          return { color: "blue" };
      }
      case "fragrances": {
          return { color: "aqua" };
      }
      case "skincare": {
          return { color: "violet" };
      }
      case "groceries": {
          return { color: "gray" };
      }
      case "home-decoration": {
          return { color: "green" };
      }
      default: {
          return { color: "white" };
      }
  }
}

  const getProducts = () => {
    {
      return productsDom.map((product) => {
        return (
          <>
            <div className = "thumbnailContainer" key = {product.id}>
              <h1 className = 'thumbnailTitle' style={getCategoryStyle(product.category)}>{product.title}</h1>
              <button onClick={() => getProduct(product.id)}>
                <img
                  src={product.thumbnail}
                  alt={product.brand}
                  className = "thumbnailImage"
                />
              </button>
              <button className = "thumbnailButton" onClick={() => removeProduct(product.id)}>
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
      {!inProduct && <div className="thumbnailWrapper"> <button className = 'thumbnailFilter' onClick={filterByRating}>Filter</button>{getProducts()} </div> }

      {inProduct && <Products product = {productsDom[0]} backToProducts = {backToProducts} />}
    </>
  );
}

export default MainProductWrapper;
