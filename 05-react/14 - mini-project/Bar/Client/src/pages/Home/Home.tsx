import { ChangeEvent, useEffect, useState } from "react";
import DogCard from "../../components/DogCard/DogCard";
import Search from "../../components/Search/Search";

function Home() {
    const [dogBreeds, setDogBreeds] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value)
    }

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                const breedsResponse = await fetch("https://dog.ceo/api/breeds/list/all")

                if (!breedsResponse.ok) {
                    throw new Error("Failed to fetch breeds");
                }
                const breedsData = await breedsResponse.json()

                const allBreeds = Object.keys(breedsData.message);

                const filteredBreeds: string[] = allBreeds.filter(breed =>
                    breed.toLowerCase().includes(search.toLowerCase())
                );

                setDogBreeds(filteredBreeds);
            }
            catch (err) {
                throw err
            }
            finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [search])

    return (
        <>
            <Search handleChange={handleChange} />
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            dogBreeds.map(breed => (
                                <DogCard key={breed} breed={breed} />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
