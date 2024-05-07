// import { useEffect, useState } from 'react';
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

// const [tempImage, setTempImage] = useState<{message: string, status: string}>()

// useEffect(() => {
//     fetch(`https://dog.ceo/api/breed/${breed.name}/images/random`)
//     .then((res) => res.json())
//     .then((obj) => {
//         setTempImage(obj.image)
//     });
// });

// const image = tempImage?.message;

// return (
//     <div className={styles.imageContainer}>
//         <img src={image} alt={breed.name} />
//     </div>
// );
// }
