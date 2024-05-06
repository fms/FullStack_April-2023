import { useState } from 'react'
import styles from './ChatBox.module.scss'

export default function ChatBox() {
    const [messages, setMessages] = useState<{ text: string; sender: string; timestamp: string }[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            const newMessageData = {
                text: newMessage,
                sender: 'me', // Assuming there's only one user
                timestamp: new Date().toISOString() // Add timestamp
            };
            setMessages([...messages, newMessageData]);
            setNewMessage('');
        }
    };

    return (
        <div className={styles.chatContainer}>
            <div className={styles.title}>
                <p>Chat</p>
            </div>
            <div className={styles.messageContainer}>
                {messages.map((message, index) => (
                    <div key={index} className={styles.message}>
                        <span className={styles.sender}>{message.sender}:</span> {message.text}
                    </div>
                ))}
            </div>
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message here"
                    className={styles.messageInput}
                />
                <button onClick={handleSendMessage} className={styles.sendButton}>Send</button>
            </div>
        </div>
    );
}