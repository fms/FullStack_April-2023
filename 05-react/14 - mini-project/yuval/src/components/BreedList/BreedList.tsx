import { useEffect, useState } from 'react';
import { useDebouncedState } from '@wojtekmaj/react-hooks';
import SearchPanel from '../SearchPanel/SearchPanel';
import styles from './BreedList.module.scss'

export default function BreedList() {
    const [searchTerm, setSearchTerm] = useState("");
    const [query, setQuery] = useDebouncedState("", 1000);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => setQuery(searchTerm), [searchTerm]);

    return (
        <>
            <input
                className={styles.searchBar}
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder='What are you looking for?'
            />
            <br/><br/>
            <SearchPanel query={query} />
        </>
    );
}