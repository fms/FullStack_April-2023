import ChatBox from "../../components/ChatBox/ChatBox";
import ImageBox from "../../components/ImageBox/ImageBox";
import { useLocation } from 'react-router-dom';
import styles from './Chat.module.scss';
import { useState } from "react";

export default function Chat() {
    const location = useLocation();
    const breed = location.state?.breed;

    const breedNameParts = breed.message.split("/").slice(-2, -1)[0].split("-");
    breedNameParts.reverse();
    const breedName = breedNameParts.map((part : string) => part.replace(/^\w/, c => c.toUpperCase())).join(' ');

    const [username, setUsername] = useState('Me');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    return (
        <>
            <h2>{breedName}</h2>
            <div className={styles.chatContainer}>
                <div className={styles.inputContainer}>
                    <label htmlFor="username">Username:</label> {" "}
                    <input type="text" id="username" value={username} onChange={handleUsernameChange} />
                </div>
                {breed && (
                    <div className={styles.chatContent}>
                        <div className={styles.imageContainer}>
                            <ImageBox breed={breed} />
                        </div>
                        <ChatBox username={username} />
                    </div>
                )}
            </div>
        </>
    );
}