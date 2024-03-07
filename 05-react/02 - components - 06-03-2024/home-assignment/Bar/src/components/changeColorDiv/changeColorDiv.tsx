import { useState } from 'react'
import "./changeColorDiv.scss"

const ChangeColorDiv = () => {
    const [color, setColor] = useState("div")

    return (
        <div 
        className={color} 
        onMouseOver={() => setColor("violet")}
        onMouseLeave={() => setColor("div")}
    >

        </div>
    )
}

export default ChangeColorDiv