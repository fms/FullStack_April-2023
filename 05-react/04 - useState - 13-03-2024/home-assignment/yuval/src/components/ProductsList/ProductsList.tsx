import { useEffect, useState } from 'react'
import SearchPanel from '../SearchPanel/SearchPanel';
import { useDebouncedState } from "@wojtekmaj/react-hooks";

export default function ProductsList () {
    const [search, setSearch] = useState("");
    const [query, setQuery] = useDebouncedState("", 1000);

    useEffect(() => setQuery(search), [search]);

    return (
        <>
            <input
                type="text"
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
            />
            <SearchPanel query={query} />
        </>    
    );
}