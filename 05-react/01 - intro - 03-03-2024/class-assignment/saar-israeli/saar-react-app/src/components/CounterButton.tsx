import React, { useState } from "react";

interface CounterButtonProps {
  plusButtonText: string;
  minusButtonText: string;
}

const CounterButton: React.FC<CounterButtonProps> = ({ plusButtonText,minusButtonText }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleClickMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    else {
      return alert("cannot go under 0");
    }
  };


  return (
    <div className="counterDiv">
      <h2>Number of clicks = {count}</h2>
      <button onClick={handleClick} className="counterButtonPlus">
        <p>{plusButtonText}</p>
      </button>
      <button onClick={handleClickMinus} className="counterButtonMinus">
        <p>{minusButtonText}</p>
      </button>
    </div>
  );
};

export default CounterButton;
