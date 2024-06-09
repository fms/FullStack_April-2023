import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { singleProduct } from "../../Features/Slices/ProductsSlice";
import { Link, useParams } from "react-router-dom";
// @ts-ignore  
const ProductCard = ({ id, name, text, img, price, colors }) => {
  const dispatch = useDispatch();
  const { type } = useParams();

  return (
    <Link to={`/filteredProducts/${type}/` + id}>
      <
      // @ts-ignore  
        Card className="w-96" onClick={() => dispatch(singleProduct(id))}>
        <
        // @ts-ignore  
            CardHeader color="blue" className="relative h-96">
          <img src={img} alt="img-blur-shadow" className="h-full w-full" />
        </CardHeader>
        <
        // @ts-ignore      
        CardBody className="text-center">
          <
          // @ts-ignore    
          Typography variant="h5" className="mb-2">
            {name}
          </Typography>
          <
          // @ts-ignore    
          Typography>{text}</Typography>
        </CardBody>
        <
        // @ts-ignore      
        CardFooter divider className="flex items-center justify-between py-3">
          <
          // @ts-ignore    
          Typography variant="small">{price}$</Typography>
          <
          // @ts-ignore    
          Typography variant="small" color="gray" className="flex gap-1">
       
            {colors?.map((
                // @ts-ignore  
                color, index) => {
              return (
                <i
                  className="fas fa-map-marker-alt fa-sm mt-[3px] rounded-full p-2 mr-4 "
                  key={index}
                  style={{ backgroundColor: color }}
                ></i>
              );
            })}
          </Typography>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
