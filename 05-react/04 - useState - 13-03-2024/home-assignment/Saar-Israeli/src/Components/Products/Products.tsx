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
      <div className = {Style.productContainer}>
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
