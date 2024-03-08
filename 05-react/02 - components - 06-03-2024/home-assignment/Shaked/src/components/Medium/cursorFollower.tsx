import { useState, useEffect } from "react";
function CursorFollower() {
    const [mousePosition, setMousePosition] = useState({ posX: 0, posY: 0 });

    useEffect(() => {
      const updateMousePosition = (e: MouseEvent) => {
        setMousePosition({ posX: e.clientX, posY: e.clientY });
      };
  
      document.addEventListener('mousemove', updateMousePosition);
    }, []);
  
    return (
        <div
          className="follower"
          style={{ left: mousePosition.posX, top: mousePosition.posY, backgroundColor: 'red'}}
        />
    );
    }
  
export default CursorFollower;
