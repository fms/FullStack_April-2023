import ChatBox from "../../components/ChatBox/ChatBox";
import ImageBox from "../../components/ImageBox/ImageBox";
import { useLocation } from 'react-router-dom';
import styles from './Chat.module.scss'

export default function Chat() {
    const location = useLocation();
    const breed = location.state?.breed;

    return (
        <>
            <h2>{breed.name}</h2>
            <div className={styles.chatContainer}>
                {breed && (
                    <div className={styles.chatContent}>
                        <div className={styles.imageContainer}>
                            <ImageBox breed={breed} />
                        </div>
                        <ChatBox />
                    </div>
                )}
            </div>
        </>
    );
}
