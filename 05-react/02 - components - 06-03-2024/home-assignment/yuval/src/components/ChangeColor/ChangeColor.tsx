import { useState } from 'react';
import changeColor from './ChangeColor.module.scss'

function ChangeColor() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    const backgroundColor = isHovered ? 'green' : 'yellow';
    return (
        <div className={changeColor.ChangeColor}
        style={{ backgroundColor }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}></div>
    )
}

export default ChangeColor