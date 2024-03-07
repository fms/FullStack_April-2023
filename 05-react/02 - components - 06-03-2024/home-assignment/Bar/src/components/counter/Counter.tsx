import { useState, MouseEvent } from 'react'
import "./counter.scss"

function Counter() {
    const [count, setCount] = useState(0)
    const [clicksCounter, setClicksCounter] = useState(0)

    function handleClick(event: MouseEvent<HTMLButtonElement>) {
        const target = event.target as HTMLButtonElement;

        if (target.name === "add") {
            setCount((count) => count + 2);
        } else if (target.name === "subtract") {
            setCount((count) => count - 2);
        }
        setClicksCounter((clicksCounter) => clicksCounter + 1);
    }

    return (
        <>
            <div className="counter">
                <h1>Counter: {count}</h1>
                <button name='add' onClick={(event) => handleClick(event)}>
                    Add 2 To Counter
                </button>
                <button name='subtract' onClick={(event) => handleClick(event)}>
                    Subtract 2 To Counter
                </button>
                <h2>Clicks Counter: {clicksCounter}</h2>
            </div>
        </>
    )
}

export default Counter
