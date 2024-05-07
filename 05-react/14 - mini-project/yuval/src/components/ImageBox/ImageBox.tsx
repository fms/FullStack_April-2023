import { useEffect, useState } from 'react';
import Breed from '../../types/breed';
import styles from './ImageBox.module.scss'

interface ImageBoxProps {
    breed: Breed;
}

export default function ImageBox({ breed }: ImageBoxProps) {
    const [imageObj, setImageObj] = useState<{ message: string, status: string }>()
    const [name, setName] = useState<string>("");

    useEffect(() => {
        if (breed.message) {
            const breedNameParts = breed.message.split("/").slice(-2, -1)[0].split("-");
            const breedName = breedNameParts.map(part => part.replace(/^\w/, c => c.toUpperCase())).join(' ');
    
            setName(breedName);
        }
    }, [breed]);
    

    useEffect(() => {
        if (name) {
            const nameParts: string[] = name.split(" ");
            const breed = nameParts[0].toLowerCase();
            let subBreed;
            if(nameParts.length === 2) {
                subBreed = nameParts[1].toLowerCase();
            }

            const apiUrl = subBreed ?
                `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random` :
                `https://dog.ceo/api/breed/${breed}/images/random`;

            fetch(apiUrl)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error('Failed to fetch image');
                    }
                    return res.json();
                })
                .then((obj) => {
                    if (obj && obj.message) {
                        setImageObj(obj);
                    } else {
                        throw new Error('Image URL not found in response');
                    }
                })
                .catch((error) => {
                    console.error('Error fetching image:', error);
                });
        }
    }, [name]);

    const image = imageObj?.message;

    return (
        <div className={styles.imageContainer}>
            {<img src={image} alt={name} />}
        </div>
    );
}