import '../Dog.css';
import { useState } from 'react';

const Dog = () => {
    const [button, setButton] = useState('');

    const handleButtonClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        setButton(e.currentTarget.value);
        alert('OK');
    };

  return (
    <div>
      <div className="dog">
        <h1>Pekinese dog</h1>
        <img id='pekinese' src='https://dogtime.com/wp-content/uploads/sites/12/2023/11/GettyImages-592689430-e1701106534817.jpg?w=1024'></img>
        <button onClick={handleButtonClick}>Buy now {button}</button>
      </div>
    </div>
  );
};

export default Dog;
