import { useEffect, useState } from 'react'
import styles from './breedCard.module.scss'
import { useNavigate } from 'react-router-dom';


function breedCard({ breed }: { breed: string }) {
    const navigate = useNavigate();
    const [breedPhoto, setBreedPhoto] = useState('');

    useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${breed}/images/random/1`)
            .then(response => response.json())
            .then(data => setBreedPhoto(data.message))
            .catch(() => alert())
    }, [breed]);

    function handleClick() {
        navigate(`/breed/${breed}`);
    }

    return (
        <>
            <div onClick={handleClick} key={breed} className={styles.breedCard}>
                <img className={styles.breedImg} src={breedPhoto} />
                <h3 className={styles.breedTitle}>{breed}</h3>
                <p className={styles.loremTxt}>Lorem ipsum dolor sit, amet consectetur <br />
                    adipisicing elit. Laboriosam, aliquid omnis</p>
            </div>
        </>
    )
}

export default breedCard


