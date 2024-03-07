import {useState, useEffect} from 'react';
import style from './FollowCursorDiv.module.scss';

function FollowCursorDiv() {
    const [position, setPosition] = useState({ x:0, y:0});

    useEffect(() => {
        const handleMouseMove = (e:MouseEvent) => {
            setPosition({x: e.clientX, y: e.clientY});
        }

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
          };
    })
  return (
    <div className={style.mouseDiv} style={{
        left: position.x + 10,
        top: position.y + 10
    }}></div>
  )
}

export default FollowCursorDiv