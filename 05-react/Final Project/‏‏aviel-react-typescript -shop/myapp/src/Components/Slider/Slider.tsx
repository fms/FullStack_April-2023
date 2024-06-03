// @ts-ignore

//////////////סליידר עם תמונות רצות

import React from "react";
import {
  nextSlide,
  prevSlide,
  dotSlide,
} from "../../Features/Slices/SliderSlice";
import { useSelector, useDispatch } from "react-redux";
import { sliderData } from "../../Assets/Data/DummyData";

const Slider = () => {
    // @ts-ignore
  const slideIndex = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();

  return (
    <div className="relative pb-4">
      <div>
        {sliderData.map((item) => {
          return (
            <div
              key={item.id}
              className={
                parseInt(item.id) === slideIndex
                  ? "opacity-100 duration-700 ease-in-out scale-100"
                  : "opacity-0 duration-700 ease-in-out scale-95"
              }
            >
              <div>
                {parseInt(item.id) === slideIndex && (
                  <img
                    className="slider_img_1"
                    src={item.img}
                    alt="shoes"
                  ></img>
                )}
              </div>
              <div className="bdika_1">
                <p className="text_on_slider_img">
                  {parseInt(item.id) === slideIndex && item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="slider_run_img">
        {sliderData.map((dot, index) => {
          return (
            <div className="mr-4" key={dot.id}>
              <div
                className={
                  index === slideIndex
                    ? "bg-green-300 rounded-full p-2 cursor-pointer"
                    : "bg-white rounded-full p-2 cursor-pointer"
                }
                onClick={() => dispatch(dotSlide(index))}
              ></div>
            </div>
          );
        })}
      </div>
      <div>
        <button
          className="button_1_test"
          onClick={() => dispatch(nextSlide(slideIndex + 1))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <button
          className="button_2_test"
          onClick={() => dispatch(prevSlide(slideIndex - 1))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
