// import { useEffect, useState } from 'react';
import Breed from '../../types/breed';
import BreedItem from '../BreedItem/BreedItem';
import { breeds } from '../../data/breeds';
import styles from './SearchPanel.module.scss'
import { useNavigate } from 'react-router-dom';

interface SearchPanelProps {
    query: string;
}

export default function SearchPanel({ query }: SearchPanelProps) {
    const navigate = useNavigate();

    const filteredBreeds: Breed[] = breeds.filter(breed =>
        breed.name.toLowerCase().includes(query.toLowerCase())
    );
    
    function handleClick(breed: Breed): void {
        navigate("/chat", { state: { breed } });
    }

    return (
        <div className={styles.BreedsList}>
                {filteredBreeds.map(breed => (
                    <BreedItem breed={breed} handleOnClick={() => handleClick(breed)} />
                ))}
        </div>
    )
}
