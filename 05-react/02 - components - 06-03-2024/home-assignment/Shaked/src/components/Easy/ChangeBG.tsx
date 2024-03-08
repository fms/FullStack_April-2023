import { useState } from "react";
function ChangeBackGround() {
    const [divColor, setDivColor] = useState('');
    
    const setRedDivColor = () => setDivColor('red');
    const returnDivColor = () => setDivColor('');

    return (
        <div className="div"
        style={{backgroundColor: divColor}}
        onMouseOver={setRedDivColor}
        onMouseLeave={returnDivColor}
        >
         Hover me to change background color
        </div>
      );
    }
  
export default ChangeBackGround;
