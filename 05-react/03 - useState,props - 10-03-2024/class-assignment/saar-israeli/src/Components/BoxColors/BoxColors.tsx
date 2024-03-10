import style from "./BoxColors.module.scss";
import SmallBoxes from "../SmallBoxes/SmallBoxes";
import { useState } from "react";

function BoxColors() {
  
  const [selectedColor, setSelectedColor] = useState('');

  const handleBoxClick = (color:string) => {
    setSelectedColor(color);
  };

  return(
  <div className={style.wrapper}>

    <div className={style.mainBox} style={{ backgroundColor: selectedColor }}></div>

    <div className={style.smallBoxes}>
      <SmallBoxes color="red" onClick={handleBoxClick}/>
      <SmallBoxes color="blue" onClick={handleBoxClick}/>
      <SmallBoxes color="green" onClick={handleBoxClick}/>
    </div>

  </div>);
}

export default BoxColors;
