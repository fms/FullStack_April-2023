import React from 'react';
import './coloredbox.scss';

interface ColoredBoxProps {
    onColorChange: (color: string) => void;
}

const ColoredBox: React.FC<ColoredBoxProps> = ({ onColorChange }) => {
    const colors = ['green', 'yellow', 'blue', 'red'];

    return (
        <div className="color-boxes">
            {colors.map((color) => (
                <div key={color} className={`color-box ${color}`} onClick={() => onColorChange(color)}></div>
            ))}
        </div>
    );
};

export default ColoredBox;