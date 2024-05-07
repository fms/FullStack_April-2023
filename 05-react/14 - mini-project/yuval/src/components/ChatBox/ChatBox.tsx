import { useEffect, useRef, useState } from 'react'
import styles from './ChatBox.module.scss'

export default function ChatBox() {
    const [messages, setMessages] = useState<{ text: string; sender: string; timestamp: string }[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');
    const messageContainerRef = useRef<HTMLDivElement>(null);

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            const newMessageData = {
                text: newMessage,
                sender: 'Me',
                timestamp: new Date().toISOString().substr(11, 5)
            };
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
                <p>Chat</p>
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