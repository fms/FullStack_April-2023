  // @ts-ignore

  ///////////// ניווט בין קטגוריות
///////  SALES UP TO 50% + big img

import React from "react";
import { Button } from "@material-tailwind/react";
import clothes from "../../Assets/Images/clothes.jpg";
import { filterProducts } from "../../Features/Slices/ProductsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const NavigateButtons = () => {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];

  const dispatch = useDispatch();

  return (
    <div>
      <div className="top_buttuns">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="top_button_txt">
              <Link to={"/filteredProducts/" + button}>
                <
                // @ts-ignore
                    Button
                  color="green"
                  size="lg"
                  variant="outlined"
                  ripple={true}
                  className="top_button_txt"
                  onClick={() => dispatch(filterProducts(button))}
                >
                  {button}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="bg-black p-2 w-[55%] mx-auto rounded-md">
        <h3 className="sales_up_to_50">
          SALES UP TO 50%
        </h3>
      </div>
      {/* <div className="flex justify-center item-center py-4">
        <img
          className="img1"
          src={clothes}
          alt="clothes"
        ></img>
      </div> */}
    </div>
  );
};

export default NavigateButtons;
