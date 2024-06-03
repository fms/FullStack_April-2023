  // @ts-ignore

  ///// מוצרים נבחרים SALE 30% חולצות

import React from "react";
import { storeData } from "../../Assets/Data/DummyData";
import ProductSectionItem from "./ProductSectionItem";

import shirt1 from "../Images/t-shirt1.jpg";
import shirt2 from "../Images/t-shirt2.jpg";
import shirt3 from "../Images/t-shirt3.jpg";
import shirt4 from "../Images/t-shirt4.jpg";
import shirt5 from "../Images/t-shirt5.jpg";
import shirt6 from "../Images/t-shirt6.jpg";

import hoodie6 from "../Images/hoodie6.jpg";

const ProductSection = () => {
  return (
    <div>
      {/* <div className="section_SUMMER_T_Shirt_SALE_30">
        <h2 className="SUMMER_T_Shirt_SALE_30">
          SUMMER T-Shirt SALE 30%
        </h2>
      </div> */}
{/* 
<div className="ima_sale_30">


<img className="img1sale" src="http://localhost:3001/static/media/t-shirt1.831f5bdf191efbbbf968.jpg" alt="" />
<img className="img1sale" src="http://localhost:3001/static/media/t-shirt8.44c3003a2210823a1bf1.jpg" alt="" />
<img className="img1sale" src="http://localhost:3001/static/media/t-shirt3.050bf01a67bfc83ca56a.jpg" alt="" />
<img className="img1sale" src="http://localhost:3001/static/media/t-shirt4.6254dc03e06a6f42fb3f.jpg" alt="" />
<img className="img1sale" src="http://localhost:3001/static/media/t-shirt5.ba96c4abe12491bed7f2.jpg" alt="" />
<img className="img1sale" src="http://localhost:3001/static/media/t-shirt6.618acaf380c2d1cff08a.jpg" alt="" />

</div> */}

<div className="my_gallery">


<div className="wrap">
	<div className="girl"></div>
	<h1>This is Final Project <span>.</span></h1>
  <div className="list">
    <div className="item">
      <div className="img" style={{
    backgroundImage: "url('static/media/hoodie3.b9146f93ebf7263c665c.jpg')"                 
}}></div>       
    </div>    
		<button>Buy Now</button>		
    <div className="item">
      <div className="img" style={{
    backgroundImage: "url('static/media/t-shirt8.44c3003a2210823a1bf1.jpg')"
}}></div>
    </div>
		<button>Buy Now</button>
    <div className="item">
      <div className="img" style={{
    backgroundImage: "url('static/media/t-shirt3.050bf01a67bfc83ca56a.jpg')"
}}></div>
    </div>
		<button>Buy Now</button>		
    <div className="item">
      <div className="img" style={{
    backgroundImage: "url('static/media/t-shirt4.6254dc03e06a6f42fb3f.jpg')"
}}></div>
    </div>
		<button>Buy Now</button>		
    <div className="item">
      <div className="img" style={{
    backgroundImage: "url('static/media/t-shirt5.ba96c4abe12491bed7f2.jpg')"
}}></div>
    </div>
		<button>Buy Now</button>		
    <div className="item">
      <div className="img" style={{
    backgroundImage: "url('static/media/t-shirt6.618acaf380c2d1cff08a.jpg')"
}}></div>
    </div>
		<button>Buy Now</button>		

		
  </div>
</div>


</div>




      {/* <div className="img_grid_data">
        {storeData.slice(0, 6).map((product, index) => {
          return (
            <div key={index}>
              <ProductSectionItem
                id={product.id}
                name={product.name}
                img={product.img}
                text={product.text}
                price={product.price}
                  // @ts-ignore
                totalPrice={product.totalPrice}
                color={product.color}
                  // @ts-ignore
                size={product.size}
              ></ProductSectionItem>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default ProductSection;
