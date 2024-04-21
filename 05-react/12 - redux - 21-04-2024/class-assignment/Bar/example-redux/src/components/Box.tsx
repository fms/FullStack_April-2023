import React from 'react'
import { changeBlue, changeOrange, colorValue } from '../features/box/boxSlice'
import { useDispatch, useSelector } from 'react-redux';


function box() {
    const dispatch = useDispatch();
    const boxColor = useSelector(colorValue);

    return (
        <>
            <div style={{ width: "200px", height: "200px", backgroundColor: boxColor }}></div>
            <button onClick={() => dispatch(changeBlue())}>changeBlue</button>
            <button onClick={() => dispatch(changeOrange())}>changeOrange</button>
        </>
    )
}

export default box