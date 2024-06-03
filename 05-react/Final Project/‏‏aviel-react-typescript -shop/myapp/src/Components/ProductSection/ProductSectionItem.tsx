  // @ts-ignore

  ///// עיצוב סקשיין -  מוצרים נבחרים SALE 30% חולצות

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Features/Slices/CartSlice";

const ProductSectionItem = ({
    // @ts-ignore
  id,
  // @ts-ignore
  img,
  // @ts-ignore
  name,
  // @ts-ignore
  text,
  // @ts-ignore
  size,
  // @ts-ignore
  price,
  // @ts-ignore
  color,
  // @ts-ignore
  totalPrice,
}) => {
  const dispatch = useDispatch();

  const defaultSize = size[0];
  const defaultColor = color[0];

  return (
    <div className="bdika_sec">
      <
      // @ts-ignore
        Card className="bdika_sec_2">
        <
        // @ts-ignore
            Typography
          variant="h4"
          className="mb-2 absolute -rotate-45 top-12 right-8 z-10 text-red-700"
        >
          SALE%
        </Typography>
        <
        // @ts-ignore    
        CardHeader floated={false} className="h-96">
          <img src={img} alt={name} />
        </CardHeader>
        <
        // @ts-ignore    
        CardBody className="text-center">
          <
          // @ts-ignore  
          Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <
          // @ts-ignore  
          Typography color="gray" className="font-medium" textGradient>
            {text}
          </Typography>
          <div className="flex justify-between items-center pt-4">
            <
            // @ts-ignore
                Typography color="red" className="font-medium" textGradient>
              Size left:{" "}
              <span className="text-gray-400 text-base font-extralight">
                {defaultSize}
              </span>
            </Typography>
            <
            // @ts-ignore    
            Typography color="gray" className="font-medium" textGradient>
              Color:{" "}
              <span
                className="px-2 rounded-full ml-2"
                style={{ backgroundColor: defaultColor }}
              ></span>
            </Typography>
          </div>
        </CardBody>
        <
        // @ts-ignore    
        CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Add to Cart" placement="bottom">
            <
            // @ts-ignore
                Button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: id,
                    img: img,
                    text: text,
                    amount: 1,
                    price: price,
                    totalPrice: totalPrice,
                    name: name,
                    size: defaultSize,
                    color: defaultColor,
                  })
                )
              }
              size="lg"
              color="gray"
              variant="outlined"
              ripple={true}
            >
              Add to Cart
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductSectionItem;
