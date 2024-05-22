import React from 'react';
import { useGetAllDogsQuery, useGetBreedImagesQuery } from '../api/dogsApi';
import { DogCardProps } from '../api/dogsApi';
import '../style/dog.css'
import { randomColor } from '../style/style';
import { capitalizeFirstLetter } from '../style/style';

const DogsList = () => {
  const { data: breeds, error: breedsError, isLoading: isLoadingBreeds } = useGetAllDogsQuery();
  const [filter, setFilter] = React.useState('');

  const handleFilterChange = (event: any) => {
    setFilter(event.target.value);
  };

  if (isLoadingBreeds) return <div>Loading...</div>;
  if (breedsError) return <div>Error</div>;
  if (!breeds) return <div>No breeds available</div>;

  return (
    <div>
      <h2 style={{ marginLeft: "40%" }}>Dogs List<br />
        <input
          type="text"
          onChange={handleFilterChange}
          placeholder="Search breed..."
        />
      </h2>
      <div className="dogs-container">
        {Object.keys(breeds.message)
          .filter(breed => !filter || breed.toLowerCase().includes(filter.toLowerCase()))
          .slice(0, 8)
          .map(breed => (
            <div className="dog-card-container" key={breed}>
              <DogCard breed={breed} />
            </div>
          ))}
      </div>
    </div>
  );
};
import { useNavigate } from 'react-router-dom';

const DogCard = ({ breed }: DogCardProps) => {
  const { data: images, error: imagesError, isLoading: isLoadingImages } = useGetBreedImagesQuery(breed);
  const navigate = useNavigate(); 
  const handleChatClick = () => {
    navigate(`/selected-dog/${encodeURIComponent(breed)}`);
  };

  if (isLoadingImages) return <div>Loading...</div>;
  if (imagesError) return <div>Error: {imagesError.message}</div>;
  if (!images || !Array.isArray(images.message)) return null;
  
  return (
    <button className="dog-card" onClick={handleChatClick}>
      <img src={images.message[0]} alt={breed} />
      <h3 style={{ color: randomColor() }}>{capitalizeFirstLetter(breed)}</h3>
    </button>
  );
};
export default DogsList;
