import { useEffect, useRef, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import styles from './ChatBox.module.scss';

interface ChatBoxProps {
    username: string;
}

interface Message {
    text: string;
    sender: string;
    timestamp: string;
}

export default function ChatBox({ username }: ChatBoxProps) {
    const [messages, setMessages] = useState<{ text: string; sender: string; timestamp: string }[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');
    const messageContainerRef = useRef<HTMLDivElement>(null);
    const socket = useRef<Socket | null>(null);

    useEffect(() => {
        socket.current = io('http://localhost:5173');

        socket.current.on('chat message', (msg: Message) => {
            setMessages([...messages, msg]);
        });

        return () => {
            if (socket.current) {
                socket.current.disconnect();
            }
        };
    }, []);

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            const newMessageData = {
                text: newMessage,
                sender: username,
                timestamp: new Date().toISOString().substr(11, 5)
            };

            if (socket.current) {
                socket.current.emit('chat message', newMessageData);
            }
            setMessages([...messages, newMessageData]);
            setNewMessage('');
        }
    };

    const handleKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.key === 'Enter') {
            handleSendMessage();
        }
    };

    useEffect(() => {
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className={styles.chatContainer}>
            <div className={styles.title}>
                <p>Chat as <strong>{username}</strong></p>
            </div>
            <div ref={messageContainerRef} className={styles.messageContainer}>
                {messages.map((message, index) => (
                    <div key={index} className={styles.messageWrapper}>
                        <span className={styles.sender}>{message.sender}:</span>
                        <div className={styles.messageText}>{message.text}</div>
                        <span className={styles.timestamp}>{message.timestamp}</span>
                    </div>
                ))}
            </div>
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message here"
                    className={styles.messageInput}
                />
                <button onClick={handleSendMessage} className={styles.sendButton}>Send</button>
            </div>
        </div>
    );
}