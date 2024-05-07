import { useEffect, useState } from 'react';
import Breed from '../../types/breed';
import BreedItem from '../BreedItem/BreedItem';
import styles from './SearchPanel.module.scss'
import { useNavigate } from 'react-router-dom';

interface SearchPanelProps {
    query: string;
}

export default function SearchPanel({ query }: SearchPanelProps) {
    const [breedArray, setBreedArray] = useState<Breed[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchBreedImages() {
            let fetchedBreeds: Breed[] = [];
            let uniqueBreeds: Set<string> = new Set();
    
            while (fetchedBreeds.length < 8) {
                try {
                    const response = await fetch('https://dog.ceo/api/breeds/image/random');
                    const data = await response.json();
                    const breedName = data.message.split("/").slice(-2, -1)[0];
    
                    if (!uniqueBreeds.has(breedName)) {
                        uniqueBreeds.add(breedName);
                        fetchedBreeds.push({
                            message: data.message,
                            status: data.status
                        });
                    }
                } catch (error) {
                    console.error('Error fetching breed image:', error);
                }
            }
            setBreedArray(fetchedBreeds);
        };
    
        fetchBreedImages();
    }, []);

    const filteredBreeds: Breed[] = breedArray.length > 0 ? breedArray.filter(breed => {
        const breedNameParts = breed.message.split("/").slice(-2, -1)[0].split("-");
        breedNameParts.reverse();
        const name = breedNameParts.map((part : string) => part.replace(/^\w/, c => c.toUpperCase())).join(' ');
        return name.toLowerCase().startsWith(query.toLowerCase());
    }) : [];
    
    
    function handleClick(breed: Breed): void {
        navigate("/chat", { state: { breed } });
    }

    return (
        <div className={styles.BreedsList}>
            {filteredBreeds.map((breed, index) => (
                <BreedItem key={index} breed={breed} handleOnClick={() => handleClick(breed)} />
            ))}
        </div>
    )
}