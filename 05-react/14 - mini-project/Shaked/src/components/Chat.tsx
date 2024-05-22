import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../style/style';
import "../style/chatStyle.css"
import { randomColor } from '../style/style';

export default function Chat() {
    const { breed } = useParams();
    const [imageURL, setImageURL] = useState('');
    const [name, setName] = useState('');
    const [textInput, setTextInput] = useState('');
    const [messages, setMessages] = useState([{ name: '', text: '' }]);
    const [nameColors, setNameColors] = useState<{ [key: string]: string }>({});

    const handleSubmit = () => {
        if (name.trim() !== '' && textInput.trim() !== '') {
            const newMessage = { name: name, text: textInput };
            setMessages([...messages, newMessage]);
            setName('');
            setTextInput('');
        } else {
            alert('Please enter name and text');
        }
    };

    const getMessageColor = (name: string) => {
        if (!nameColors.hasOwnProperty(name)) {
            const color = randomColor();
            setNameColors({ ...nameColors, [name]: color });
            return color;
        }
        return nameColors[name];
    };

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
                const data = await response.json();
                setImageURL(data.message);
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        fetchImage();
    }, [breed]);

    return (
        <div className='container'>
            <div className="smallContainer">
            <button className='back'> <Link to="/" className='back'>Back</Link></button>
            </div>
            <img src={imageURL} alt={breed} />
            <div className='chat'>
                <h1 style={{ color: getMessageColor(name) }}>Chat with {capitalizeFirstLetter(breed!)}</h1>
                <input type='text' value={name} placeholder='Name' onChange={(ev) => setName(ev.target.value)} /><br />
                <textarea style={{ width: "100%" }} value={textInput} placeholder='Text' onChange={(ev) => setTextInput(ev.target.value)} />
                <button onClick={handleSubmit}>Submit</button>
                {messages.map((message, index) => (
                    <p key={index}><span style={{ color: getMessageColor(message.name) }}>{message.name}</span>: {message.text}</p>
                ))}
            </div>
        </div>
    );
}
