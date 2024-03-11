
import { useState } from "react";
import Box1 from "./components/Box1/Box1";
import ColoredBox from './components/ColoredBox/ColoredBox';
import './App.css'


const App: React.FC = () => {
  const [mainBoxColor, setMainBoxColor] = useState('white');

  const handleColorChange = (color: string) => {
      setMainBoxColor(color);
  };

  return (
      <div>
          <Box1 color={mainBoxColor} />
          <ColoredBox onColorChange={handleColorChange} />
      </div>
  );
};

export default App;


