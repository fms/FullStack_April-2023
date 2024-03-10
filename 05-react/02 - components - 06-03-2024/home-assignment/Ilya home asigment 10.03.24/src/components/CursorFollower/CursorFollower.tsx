import React, { useState, useEffect } from 'react';
import './cursorfollower.scss'; // 

const CursorFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', updateMousePosition);

        return () => {
            document.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <div className="cursor-follower" style={{ left: position.x, top: position.y }}>
            {/* Your content goes here */}
        </div>
    );
};

export default CursorFollower;