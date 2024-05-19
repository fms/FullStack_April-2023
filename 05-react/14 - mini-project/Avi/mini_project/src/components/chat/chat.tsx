import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import ChatRoom from './CahtRoom';
import NameInput from './NameInput';

const socket = io();

const Chat = () => {
    const [userName, setUserName] = useState('');
    const [isNameSubmitted, setIsNameSubmitted] = useState(false);

    useEffect(() => {
        const handleChatMessage = (data: { name: string, message: string }) => {
            console.log(`${data.name}: ${data.message}`);
        };

        socket.on('chat message', handleChatMessage);

        return () => {
            socket.off('chat message', handleChatMessage);
        };
    }, []);

    const handleNameSubmit = (name: string) => {
        setUserName(name);
        setIsNameSubmitted(true);
    };

    const handleMessageSubmit = (message: string) => {
        if (message.trim() !== '') {
            socket.emit('chat message', { name: userName, message });
        }
    };

    return (
        <div>
            {isNameSubmitted ? (
                <ChatRoom userName={userName} onMessageSubmit={handleMessageSubmit} />
            ) : (
                <NameInput onNameSubmit={handleNameSubmit} />
            )}
        </div>
    );
};

export default Chat;

