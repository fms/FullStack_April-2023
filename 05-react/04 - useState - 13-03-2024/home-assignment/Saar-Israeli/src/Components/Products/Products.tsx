// 1. Render a list of product cards showcasing the product information.

// 2. Add a button for removing a product.

// 3. Add a button for filtering products by rating. Only show products with a 4.5 rating or above.

// 4. Styling: Set a different background color for different product categories.

// 5. Styling: make the cards presentable using SCSS.
import ProductModule from "../../Module/ProductModule/ProductModule";
import Style from "./Products.module.scss";
import ImageSlider from "../ImageSlider/ImageSlider";
import CategoryComp from "../CategoryComp/CategoryComp";
import BuyComp from "../BuyComp/BuyComp";

interface ProductProps {
  product: ProductModule;
  backToProducts: (inProduct:boolean) => any;
}

const Products = ({ product , backToProducts }: ProductProps) => {
  const inProduct = true;
  return (
    <>
      <div className={Style.productContainer}>
        <button className={Style.backToProducts} onClick={() => backToProducts(!inProduct)}>{"<"}</button>
        <h1 className={Style.productTitle}>{product.title}</h1>
        <CategoryComp
          category={product.category}
          brand={product.brand}
          rating={product.rating}
        />
        <div className={Style.imageSliderWrapper}>
          <ImageSlider images={product.images} />
        </div>
        <p className={Style.productDescription}>{product.description}</p>
        <BuyComp
          price={product.price}
          discountPercentage={product.discountPercentage}
          stock={product.stock}
        />
      </div>
    </>
  );
};

export default Products;
