import Style from "./ImageSlider.module.scss";
import { useState } from "react";

interface ImageSliderProps {
  images: string[];
}

function ImageSlider({ images }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(1);

  const goToPrevious = () => {
    currentIndex > 0 ? setCurrentIndex(currentIndex - 1) : setCurrentIndex(currentIndex + (images.length - 1));
  }

  const goToNext = () => {
    currentIndex < images.length ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(currentIndex - (images.length - 1));
  }

  return (
    <>
      <div className={Style.imageSlider}>
              <div className={Style.rightArrow} onClick={goToPrevious}> {'>'} </div>
              <div className={Style.leftArrow} onClick={goToNext}> {'<'} </div>
              <img className={Style.imageItem} src={images[currentIndex]}></img>
      </div>
    </>
  );
}

export default ImageSlider;
