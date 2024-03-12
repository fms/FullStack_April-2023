import React, { useState } from "react";

const colors = ["red", "green", "blue", "yellow", "white", "gray", "lightblue"];

export default function Box() {
    const [mainBoxColor, setMainBoxColor] = useState("white");

    const changeColor = (newColor: React.SetStateAction<string>) => {
        setMainBoxColor(newColor);
    };

    return (
        <div className="mainBox">
            <div
                className="box"
                style={{ backgroundColor: mainBoxColor }}>
                Main Box
            </div>
            <div className="coloredBoxes">
                {colors.map((color) => (
                    <div
                        key={color}
                        className="box"
                        style={{ backgroundColor: color }}
                        onClick={() => changeColor(color)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

