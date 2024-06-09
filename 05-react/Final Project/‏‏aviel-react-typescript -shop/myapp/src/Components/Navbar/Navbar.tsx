  // @ts-ignore

  ///////// האדר עליון

import React, { useState } from "react";
import logo from "../../Assets/Images/logo.png";
import Cart from "../Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Features/Slices/AuthSlice";
import { Avatar } from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";

const Navbar = () => {
   // @ts-ignore
  const totalAmount = useSelector((state) => state.cart.totalAmount);
   // @ts-ignore
  const user = useSelector((state) => state.user.user);
  const { name, image } = user;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const dispatch = useDispatch();

  return (
    <>

    <div className="aviel_the_header_of_the_site">

      <div className="aviel_logo_site">
       <img className="shoplogo" src={logo} alt="store"></img>
     </div>
     


    <div className="aviel_title_site">
<p className="aviel shop title">
          AVIEL SHOP - THE FINAL PROJECT
        </p>
</div>
 
<div className="aviel_home_cart_user">



     <div className="aviel_link_to_home_page">
<p className="aviel home page"><a href="http://localhost:3000">Home page</a></p>
</div>



<div className="aviel_shoping_bag">

<div
            className="flex flex-row items-center cursor-pointer"
            onClick={handleOpen}
          >
            {totalAmount > 0 ? (
              <span className="cart_bug_count">
                {totalAmount}
              </span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#000"
                className="shoping_bag_img"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            )}

            <p className=" font-inter text-base font-medium tracking-normal leading-none text-center ">
              Shopping bag
            </p>
            <div>
              {open && <Cart openModal={open} setOpen={setOpen}></Cart>}
            </div>
          </div>

</div>


<div className="aviel_user">

<div className="flex flex-row items-center cursor-pointer pl-4">
            {image && (
               // @ts-ignore
              <Avatar
                src={image}
                alt="avatar"
                size="sm"
                className="mr-2"
              ></Avatar>
            )}
            <div onClick={() => dispatch(logout())}>
              <Tooltip content="Sign Out" placement="bottom">
                <p className="font-inter text-sm font-medium tracking-normal leading-none">
                  Hi {name.charAt("0").toUpperCase() + name.slice(1)}
                </p>
              </Tooltip>
            </div>
          </div>

</div>

</div>

    </div>



    </>
  );
};

export default Navbar;
