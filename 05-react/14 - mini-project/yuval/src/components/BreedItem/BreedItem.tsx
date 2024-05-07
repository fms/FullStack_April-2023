import Breed from "../../types/breed";
import classes from './BreedItem.module.scss'

interface BreedItemProps {
    breed: Breed;
    handleOnClick: () => void;
}

export default function BreedItem({ breed, handleOnClick }: BreedItemProps) {
    const breedNameParts = breed.message.split("/").slice(-2, -1)[0].split("-");
    breedNameParts.reverse();
    const name = breedNameParts.map((part : string) => part.replace(/^\w/, c => c.toUpperCase())).join(' ');

    return (
        <div key={breed.message} className={classes.photoDiv}>
            <img src={breed.message} alt={name} onClick={handleOnClick} />
            <h3>{name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Nunc maximus, nulla ut.</p>
        </div>
    )
}