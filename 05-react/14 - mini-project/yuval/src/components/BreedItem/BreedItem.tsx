import Breed from "../../types/breed";
import classes from './BreedItem.module.scss'

interface BreedItemProps {
    breed: Breed;
    handleOnClick: () => void;
}

export default function BreedItem({ breed, handleOnClick }: BreedItemProps) {

    return (
        <div key={breed.id} className={classes.photoDiv}>
            <img src={breed.imgUrl} alt={breed.name} onClick={handleOnClick} />
            <h3>{breed.name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Nunc maximus, nulla ut.</p>
        </div>
    )
}