import { useState } from "react";
import "./App.css";
import PhotoList2 from "./components/productList2/productList2";
import Filter from "./components/Filter/My_filter"
import { products } from "./data/products";



function App() {


  return (
    <>
      <div>
        <PhotoList2 />
        <br />
        <br />

        <p>products with 4.5 rating or above</p>

        <Filter />

        <br />
        <br />

      </div>

 
      
      
    </>
  );
}

export default App;


