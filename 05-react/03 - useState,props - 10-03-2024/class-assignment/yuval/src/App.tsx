import { useState } from 'react';
import './App.css'
import Box from './components/Box/Box'

function App () {
    const [mainBoxColor, setMainBoxColor] = useState('black');
    const colors = ['red', 'blue', 'green', 'cyan', 'pink', 'purple', 'gold', 'orange', 'brown'];
    const initialClickedState = Object.fromEntries(colors.map(color => [color, 0]));
    const [clicked, setClicked] = useState<{ [color: string]: number }>(initialClickedState);
    const [total, setTotal] = useState(0);
    
    const handleBoxClick = (color: string) => {
        if(color != mainBoxColor) {
            setMainBoxColor(color);
            if(color == "black") {
                setClicked(resetCounts);
                setTotal(0);
            }
            else {
                setClicked(prevCounts => ({
                    ...prevCounts,
                    [color]: prevCounts[color] + 1
                }));
                setTotal(total + 1);
            }
        }
    };

    function resetCounts() {
        const resetCountsObj: { [color: string]: number } = {};
        colors.forEach((color) => {
            resetCountsObj[color] = 0;
        });
        return resetCountsObj;
    };

    const nonZeroClickedColors = Object.keys(clicked).filter(color => clicked[color] > 0);
    const favorite = nonZeroClickedColors.reduce((a, b) => clicked[a] >= clicked[b] ? a : b, '');
    
    return (
        <>
            <div>
                {favorite !== '' && <h3>Your Favorite Color Is: {favorite}</h3>}
                <button className='restart' onClick={() => handleBoxClick('black')}>Restart</button>
            </div>
            <div className="main-box" style={{ backgroundColor: mainBoxColor }}></div>
            <div className="colored-boxes">
                {colors.map((color) => (
                    <Box key={color} color={color} onClick={() => handleBoxClick(color)} clicked={clicked[color]} />
                ))}
            </div>
            <h3>Total Clicks: {total}</h3>
        </>
    );
};

export default App;