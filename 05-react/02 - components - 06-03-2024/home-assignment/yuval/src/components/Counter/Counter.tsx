import { useState } from 'react'
import counter from './Counter.module.scss'

function AddCounter() {
    const [count, setCount] = useState(0);
    const [pressed, setPressed] = useState({ add: 0, sub: 0 });

    return (
            <>
                <h3>Counter is {count}</h3>
                <div>
                    <button className={counter.add} onClick={() => handleClick(2, "add")}>Add 2, pressed {pressed.add} times</button>
                    <button className={counter.sub} onClick={() => handleClick(-2, "sub")}>Subtract 2, pressed {pressed.sub} times</button>
                </div>
            </>
        );
        
        function handleClick (amount: number, buttonClass: string) {
            setCount(count + amount);
            setPressed({ ...pressed, [buttonClass]: pressed[buttonClass] + 1 });
        }
}

export default AddCounter