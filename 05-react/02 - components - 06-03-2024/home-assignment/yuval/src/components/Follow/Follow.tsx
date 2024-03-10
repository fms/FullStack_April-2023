import { useState, useEffect } from 'react'
import follower from './Follow.module.scss'

function Follow() {
        const [position, setPosition] = useState({ x: 0, y: 0 });

        useEffect(() => {
            const updateMousePosition = (ev: { clientX: any; clientY: any; }) => {
                setPosition({ x: ev.clientX + 5, y: ev.clientY });
            };
        
            document.addEventListener('mousemove', updateMousePosition);
        
            return () => {
                document.removeEventListener('mousemove', updateMousePosition);
            };
        }, []);

        return (
            <div
                className={follower.follower}
                style={{ left: position.x, top: position.y }}
            />
        );
}

export default Follow