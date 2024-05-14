import { useEffect, useState } from "react";
import DogCard from "../../components/dogCard/DogCard";
import style from "./dogHomePage.module.scss";
import SearchBar from "../../components/searchBar/SearchBar";

function DogHomePage() {
  const [dogDetails, setDogDetails] = useState<AllDogType[]>([]);
  const [dogDetailsFilterd, setDogDetailsFilterd] = useState<AllDogType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getDogsBreed() {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const fetchedDogDetails = await response.json();
      if (response.ok) {
        const dogBreeds = Object.keys(fetchedDogDetails.message);

        const dogData = dogBreeds.map((breed) => ({
          breed: breed,
          imageUrl: "",
        }));

        getDogsImage(dogData);
      } else {
        console.log(`error: ${fetchedDogDetails.error}`);
      }
    } catch (error) {
      console.log("error trying to fetch");
    }
  }

  async function getDogsImage(dogData: AllDogType[]) {
    try {
      const promises = dogData.map(async (dog) => {
        const response = await fetch(
          `https://dog.ceo/api/breed/${dog.breed}/images/random`
        );
        const fetchedDogDetails = await response.json();

        if (response.ok) {
          dog.imageUrl = fetchedDogDetails.message;
          return dog;
        }
      });

      const updatedDogData = (await Promise.all(promises)).filter(
        Boolean
      ) as AllDogType[];
      setDogDetails(updatedDogData);
      setDogDetailsFilterd(updatedDogData);
    } catch (error) {
      console.log(`error fetching img: ${error}`);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getDogsBreed();
  }, []);

  function inputHandleChangeValue(value:string) {
    setDogDetailsFilterd(dogDetails.filter(dog => dog.breed.toLowerCase().includes(value.toLowerCase())));
  }

  return (
    <>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className = {style.wrapper}>
              <SearchBar onInputChange = {inputHandleChangeValue} />
              <div className={style.dogSectionWrapper}>
                {dogDetailsFilterd.map((dog) => (
                  <DogCard
                    breed={dog.breed}
                    key={dog.breed}
                    imageUrl={dog.imageUrl}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default DogHomePage;
