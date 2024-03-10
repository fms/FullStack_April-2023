import { useState } from 'react'
import counter from './Counter.module.scss'

function AddCounter() {
    const [count, setCount] = useState(0);
    const [pressed, setPressed] = useState(0);

    return (
            <>
                <h3>Counter is {count}, buttons pressed {pressed} times</h3>
                <div>
                    <button className={counter.add} onClick={() => handleClick(2)}>Add 2</button>
                    <button className={counter.sub} onClick={() => handleClick(-2)}>Subtract 2</button>
                </div>
            </>
        );
        
        function handleClick (amount: number) {
            setCount(count + amount);
            setPressed(pressed + 1);
        }
}

export default AddCounter