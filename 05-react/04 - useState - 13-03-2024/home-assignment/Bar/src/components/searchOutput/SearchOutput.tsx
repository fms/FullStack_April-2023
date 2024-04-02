import { useEffect, useState } from 'react'

interface SearchPanelProps {
    setSearch: React.Dispatch<React.SetStateAction<string>>,
}

const SearchOutput = ({ setSearch }: SearchPanelProps) => {
    const [searchQuery, setSearchQuery] = useState("")

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearch(searchQuery)
        }, 500)
        return () => clearTimeout(timer)
    }, [searchQuery, setSearch])

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    }

    return (
        <>
            <h2>Filter By Text</h2>
            <div className="searchBar">
                <input type="text" value={searchQuery} onChange={handleSearchChange} />
            </div>
        </>
    )
}

export default SearchOutput