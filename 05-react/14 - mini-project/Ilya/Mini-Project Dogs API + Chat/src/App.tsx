import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BreedCard from './components/BreedCard';
import SearchBar from './components/SearchBar/SearchBar';
import { Breed, ApiResponse } from './types';


const App: React.FC = () => {
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [filteredBreeds, setFilteredBreeds] = useState<Breed[]>([]);

  const fetchBreeds = async () => {
    try {
      const response = await axios.get<ApiResponse>('https://dog.ceo/api/breeds/list/all');
      const breedEntries = Object.entries(response.data.message);
  
      const breedPromises = breedEntries.map(async ([key]) => {
        // Fetch a random image for each breed
        const imageResponse = await axios.get<{ message: string; status: string }>(`https://dog.ceo/api/breed/${key}/images/random`);
        return {
          name: key,
          image: imageResponse.data.message,
          description: ""
        };
      });
  
      const fetchedBreeds: Breed[] = await Promise.all(breedPromises);
      setBreeds(fetchedBreeds);
      setFilteredBreeds(fetchedBreeds);
    } catch (error) {
      console.error('Failed to fetch breeds:', error);
      // Handle errors as needed
    }
  };

  useEffect( () => {
    fetchBreeds();
  }, []);

  const handleSearch = (searchTerm: string) => {
    const filtered = breeds.filter(breed => breed.name.includes(searchTerm));
    setFilteredBreeds(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="breed-container">
        {filteredBreeds.map(breed => <BreedCard key={breed.name} breed={breed} click="" />)}
      </div>
    </div>
  );
};

export default App;
