import "./MainProductWrapper.scss";
import Products from "../Products/Products";
import { useEffect, useState } from "react";
import ProductModule from "../../Module/ProductModule/ProductModule";
import getData from "../../Utils/getData";
import SearchPanel from "../SearchPanel/SearchPanel";


let oldData: ProductModule[];

function MainProductWrapper() {
  const [productsDom, setProductsDom] = useState<ProductModule[]>();
  const [inProduct, setInProduct] = useState(false);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  async function getProductsData(signal: AbortSignal) {
    const data = await getData<ProductModule[]>(
      `https://dummyjson.com/products`,
      signal
    );
    oldData = data;
    setProductsDom(data);
  }

  useEffect(() => {
    const controller = new AbortController();

    getProductsData(controller.signal);

    return () => {
      controller.abort();
    };
  }, []);

  const getProduct = (id?: number): any => {
    setInProduct(!inProduct);
    if (productsDom) {
      oldData = productsDom;
      setProductsDom(productsDom.filter((product) => product.id === id));
    } else {
      console.log("error in get product");
    }
  };

  const removeProduct = (id?: number): any => {
    if (productsDom) {
      oldData = productsDom;
      setProductsDom(productsDom.filter((product) => product.id !== id));
    } else {
      console.log("error in remove product");
    }
  };

  const backToProducts = (): any => {
    setProductsDom(oldData);
    setInProduct(!inProduct);
  };

  const filterByRating = () => {
    if (productsDom === oldData) {
      setProductsDom(
        productsDom.filter((product) => {
          if (product.rating >= 4.5) {
            return product;
          }
        })
      );
    } else {
      setProductsDom(oldData);
    }
  };

  function getCategoryStyle(category?: string): any {
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

  const filteredProducts = productsDom?.filter((product) =>
    product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <>
      {!inProduct && (
        <div className="wrapper">
          <div className="headerWrapper">
            <button className="thumbnailFilter" onClick={filterByRating}>
              Filter
            </button>
            <SearchPanel setSearch={setDebouncedSearch} />
          </div>
          <div className="thumbnailWrapper">
            {filteredProducts?.map((product) => (
              <div className="thumbnailContainer" key={product.id}>
                <h1
                  className="thumbnailTitle"
                  style={getCategoryStyle(product.category)}
                >
                  {product.title}
                </h1>
                <button onClick={() => getProduct(product.id)}>
                  <img
                    src={product.thumbnail}
                    alt={product.brand}
                    className="thumbnailImage"
                  />
                </button>
                <button
                  className="thumbnailButton"
                  onClick={() => removeProduct(product.id)}
                >
                  Remove Product
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {inProduct && (
        <Products product={productsDom![0]} backToProducts={backToProducts} />
      )}
    </>
  );
}

export default MainProductWrapper;
