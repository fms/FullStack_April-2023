import { useState, useEffect } from 'react'
import follower from './Follow.module.scss'

function Follow() {
        const [position, setPosition] = useState({ x: 0, y: 0 });

        useEffect(() => {
            const updateMousePosition = (ev: { clientX: any; clientY: any; }) => {
                setPosition({ x: ev.clientX -550 , y: ev.clientY -650 });
            };
        
            document.addEventListener('mousemove', updateMousePosition);
        
            return () => {
                document.removeEventListener('mousemove', updateMousePosition);
            };
        }, []);

        return (
            <div
                className={follower.follower}
                style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
            />
        );
}

export default Follow