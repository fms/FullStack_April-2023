import { useState } from "react";
import { products } from "../../data/products";
import { product } from "../../types/product";


// import "./App.css";
export default function Filter() {
    return (
      <div>
        {products.filter(products => products.rating >= 4.5).map(Filteredproducts => (
          <li>
            {Filteredproducts.title} 
          </li>
          
        ))}


      </div>
    );
        }

          //       export default function Filter_btn() {
  //         return (

  //           <button onClick={Filter}>Show Only 4.5 Rating</button>


  //         )

  // };