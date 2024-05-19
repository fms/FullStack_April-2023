import React, { useState, useEffect, useRef } from 'react';

const ChatRoom = ({ userName, onMessageSubmit }:{userName:string, onMessageSubmit:(message:string)=> void}) => {
    const [message, setMessage] = useState('');
    const messagesEndRef = useRef<HTMLLIElement>(null);

    const handleSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        onMessageSubmit(message);
        setMessage('');
    };

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <div>
            <div id="title">
                <p>Chat</p>
            </div>
            <ul id="messages">
                {/* Render chat messages here */}
                <li ref={messagesEndRef} />
            </ul>
            <form id="form" onSubmit={handleSubmit}>
                <input
                    id="input"
                    autoComplete="off"
                    placeholder="Type your message here"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatRoom;


