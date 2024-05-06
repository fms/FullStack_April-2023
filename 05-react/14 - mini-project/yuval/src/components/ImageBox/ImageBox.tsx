import Breed from '../../types/breed';
import styles from './ImageBox.module.scss'

interface ImageBoxProps {
    breed: Breed;
}

export default function ImageBox({ breed }: ImageBoxProps) {
    return (
        <div className={styles.imageContainer}>
            <img src={breed.imgUrl} alt={breed.name} />
        </div>
    );
}
