import React, { useState } from 'react'
import './counter.css'
const counter = () => {
    const [count, setCount] = useState(0)

  return (
    <div className='counter'>
        <button onClick={() => setCount((count:any) => count + 2)}>+2</button>
        <button onClick={() => setCount((count:any) => count - 2)}>-2</button>
        <p>Sum:{count} <br />
        Clicks:{count}</p>
        
    </div>
  )
}

export default counter