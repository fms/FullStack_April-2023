import { useEffect, useState } from 'react'
import styles from './mainPage.module.scss'
import BreedCard from '../breedCard/breedCard';

function mainPage() {
    const [breed, setBreed] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchInput(event.target.value)
    }

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => response.json())
            .then(data => setBreed(data.message))
            .catch(err => console.error(err))
    }, []);

    const filterBreed = Object.keys(breed).filter((breedName) =>
        breedName.toLowerCase().includes(searchInput))

    return (
        <>
            <input
                className={styles.search}
                type="text"
                value={searchInput}
                onChange={handleSearch}
                placeholder='What are you looking for?'
            />
            <div className={styles.main}>

                {
                    filterBreed.map((breedName) => (
                        <BreedCard key={breedName} breed={breedName} />
                    ))
                }

            </div>
        </>
    )
}

export default mainPage


