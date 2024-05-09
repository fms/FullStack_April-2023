import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface DogCardProps {
    breed: string;
}

function DogCard({ breed }: DogCardProps) {
    const navigate = useNavigate();
    const [image, setImage] = useState<string>("");

    useEffect(() => {
        async function fetchDogsImage() {
            try {
                const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);

                if (!response.ok) {
                    throw new Error("Failed to fetch image");
                }
                const imageData = await response.json();
                setImage(imageData.message);
            }
            catch (err) {
                console.error(`Error fetching image for breed "${breed}":`, err);
            }
        }
        fetchDogsImage();
    }, [breed]);

    const handleClick = () => {
        navigate(`/dogs/${breed}`, { state: { breed, image } });
    };

    return (
        <div className="col-lg-3 mb-4">
            <div className="card h-100 img-fluid">
                {image && <img className="card-img-top img-fluid h-50" src={image} alt={breed} />}
                <h2 className="card-header">{breed}</h2>
                <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quo non hic omnis modi consequatur distinctio molestiae possimus ullam cum!</p>
                </div>
                <button
                    onClick={handleClick}
                    className="btn btn-primary"
                >
                    Enter Dog Chat
                </button>
            </div>
        </div >
    );
}

export default DogCard;
