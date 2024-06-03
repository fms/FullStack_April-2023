import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { Button } from "@material-tailwind/react";
import Navbar from "../Navbar/Navbar";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import Error from "../Error/Error";
import {
  filterProducts,
  filterGender,
  sortByPrice,
  filterByColor,
  filterBySize,
} from "../../Features/Slices/ProductsSlice";

const FilteredProducts = () => {
     // @ts-ignore  
  const products = useSelector((state) => state.products.filteredProducts);
   // @ts-ignore  
  const error = useSelector((state) => state.products.error);
  const { type } = useParams();
  const genderButtons = ["male", "female"];
  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const sizeButtons = ["S", "M", "L", "XL"];
  const dispatch = useDispatch();

  return (


    <div className="">
       <Navbar></Navbar>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="cataguria_title">
            {type}
          </h1>
          <div className="select_filter">
            <div className="all_filters">
              {genderButtons.map((item, index) => {
                return (
                  <div key={index}>
                    <
                    // @ts-ignore  
                        Button
                      color="gray"
                      size="lg"
                      variant="outlined"
                      ripple={true}
                      className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                      onClick={() => dispatch(filterGender(item))}
                    >
                      {item}
                    </Button>
                  </div>
                );
              })}
              <
              // @ts-ignore  
                Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                // @ts-ignore  
                onClick={() => dispatch(sortByPrice())}
              >
                High Price
              </Button>
              <Menu>
                <MenuHandler>
                  <
                  // @ts-ignore  
                    Button
                    color="gray"
                    size="lg"
                    variant="outlined"
                    ripple={true}
                    className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                  >
                    Select a color
                  </Button>
                </MenuHandler>
                <
                // @ts-ignore  
                    MenuList >
                  {colorButtons.map((item, index) => {
                    return (
                         // @ts-ignore  
                      <MenuItem className="color_list"
                        style={{ color: item }}
                        key={index}
                        onClick={() => dispatch(filterByColor(item))}
                      >
                        {item}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
              <Menu>
                <MenuHandler>
                  <
                  // @ts-ignore  
                    Button
                    disabled={type === "Bags" || type === "Shoes"}
                    color="gray"
                    size="lg"
                    variant="outlined"
                    ripple={true}
                    className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                  >
                    Select a size
                  </Button>
                </MenuHandler>
                <
                // @ts-ignore  
                    MenuList>
                  {sizeButtons.map((item, index) => {
                    return (
                      <
                       // @ts-ignore    
                      MenuItem className="size_list"
                        key={index}
                        onClick={() => dispatch(filterBySize(item))}
                      >
                        {item}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
            </div>
            <div className="clear_filter">
              <
              // @ts-ignore  
                Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                onClick={() => dispatch(filterProducts(type))}
              >
                Clear Filter
              </Button>
            </div>
          </div>
        </div>
        {error ? (
          <Error></Error>
        ) : (
          <div className="main_grid">
            {products
                 // @ts-ignore  
              .filter((product) => product.type === type)
               // @ts-ignore  
              .map((product, index) => {
                return (
                
                  <div key={index} className="product_card">
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      text ={product.text} 
                      img={product.img}
                      price={product.price}
                      colors={product.color}
                    ></ProductCard>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilteredProducts;
