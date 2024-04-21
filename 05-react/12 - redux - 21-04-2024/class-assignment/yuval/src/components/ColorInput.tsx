import React, { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setColor } from "../features/color/colorSlice";

export default function ColorInput() {
    const color = useAppSelector((state) => state.color.value);
    const dispatch = useAppDispatch();

    function handleChangeColor(newColor: string) {
        dispatch(setColor(newColor));
    };

    function handleInput(event: ChangeEvent<HTMLInputElement>): void {
        dispatch(setColor((event.target as HTMLInputElement).value));
    }

    return (
        <div>
            <div
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: color,
                }}
            >
            </div>
            <input type="text" onChange={handleInput} value={color} />
            <button onClick={() => handleChangeColor("red")}>Red</button>
            <button onClick={() => handleChangeColor("blue")}>Blue</button>
            <button onClick={() => handleChangeColor("green")}>Green</button>
        </div>
    );
}

