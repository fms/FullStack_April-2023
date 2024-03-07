import style from "./changeOnHover.module.scss";
import { useState } from "react";

function changeOnHover() {
  const root = document.querySelector(":root") as HTMLElement;
  const [isHovered, setIsHovered] = useState(false);
  function handleMouseEnter(){
    setIsHovered(true);
    root.style.backgroundColor = 'cyan';
  };
  function handleMouseLeave(){
    setIsHovered(false);
    root.style.backgroundColor = 'white'
  };
  const backgroundColor = isHovered ? 'white' : 'black';

  return (
    <>
      <div className={style.changeOnHover}></div>
      <div
        className={style.changeOnHoverRoot}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{backgroundColor}}
      ></div>
    </>
  );
}

export default changeOnHover;
