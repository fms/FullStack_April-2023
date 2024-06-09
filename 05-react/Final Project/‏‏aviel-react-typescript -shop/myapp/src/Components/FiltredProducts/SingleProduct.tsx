// @ts-ignore  

////////// מסך תיאור מוצר יחיד


import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Tooltip, Button } from "@material-tailwind/react";
import { addToCart } from "../../Features/Slices/CartSlice";
import { useDispatch } from "react-redux";
import Navbar from "../Navbar/Navbar";

const SingleProduct = () => {
    // @ts-ignore  
  const product = useSelector((state) => state.products.singleProduct);
  const productSize = product[0].size ? product[0].size[0] : "";
  const productColor = product[0].color[0];
  const [size, setSize] = useState(productSize);
  const [color, setColor] = useState(productColor);

  const { id } = useParams();
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar></Navbar>
      {product
      // @ts-ignore  
        .filter((product) => product.id === id)
        // @ts-ignore  
        .map((item, index) => {
          return (
            <div key={index} className="all_single_product">
              <div className="img_and_name">
                <img
                  className="test"
                  src={item.img}
                  alt={item.name}
                ></img>
              </div>
              <div className="grow-[3]">
                <div className="max-w-lg">
                  <h5 className="item_name">
                    {item.name}
                  </h5>
                  <p className="item_count">
                    15% OFF
                  </p>
                  <p className="item_text">
                    {item.text}
                  </p>
                  <div className="item_size">
                    {item.size ? (
                      <div>
                        <label
                          htmlFor="size"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Pick a size
                        </label>
                        <select
                          id="size"
                          name="size"
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {item.size.map(
                            // @ts-ignore  
                            (item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    ) : (
                      <div>
                        <label
                          htmlFor="size"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Pick a size
                        </label>
                        <select
                          id="size"
                          disabled={true}
                          name="size"
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {item?.size?.map((
                            // @ts-ignore  
                            item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    )}
                  </div>

                  <div className="item_color">
                    <label
                      htmlFor="color"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Pick a color
                    </label>
                    <select
                      id="color"
                      name="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      {item.color.map((
                        // @ts-ignore  
                        color, index) => {
                        return (
                          <option key={index} value={color}>
                            {color}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <Tooltip content="Add to Cart" placement="bottom">
                    <
                    // @ts-ignore  
                        Button
                      color="gray"
                      size="lg"
                      variant="outlined"
                      ripple={true}
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: item.id,
                            name: item.name,
                            img: item.img,
                            text: item.text,
                            size: size,
                            color: color,
                            price: item.price,
                            amount: 1,
                            totalPrice: item.price,
                          })
                        )
                      }
                    >
                      Add to Cart
                    </Button>
                  </Tooltip>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SingleProduct;
