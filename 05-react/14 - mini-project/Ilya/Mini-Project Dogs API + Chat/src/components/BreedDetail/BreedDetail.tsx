// BreedDetail.tsx
import React, { useEffect, useState } from "react";
import { Breed } from "../../types";
import { useParams } from "react-router";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ChatForm from "../ChatForm/ChatForm";
import "./BreedDetail.css";

const BreedDetail: React.FC = () => {
  const { breedName } = useParams<{ breedName: string }>();
  const [breed, setBreed] = useState<Breed | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (breedName) {
      axios
        .get(`https://dog.ceo/api/breed/${breedName}/images/random`)
        .then((response) => {
          setBreed({
            name: breedName.charAt(0).toUpperCase() + breedName.slice(1), // Capitalize the first letter
            image: response.data.message,
            description: "", // Assume description
          });
        })
        .catch((error) => {
          setError(`Fetching breed data failed: ${error.message}`);
        });
    }
  }, [breedName]);

  return (
    <div className="breedDetail container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="breed-image">
            {error ? (
              <div className="error">{error}</div>
            ) : (
              <Card style={{ width: "100%" }}>
                <Card.Title className="breed-name">{breed?.name}</Card.Title>
                <Card.Img src={breed?.image} alt={breed?.name} width="100%" />
              </Card>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <ChatForm breedName={breedName} className="chat-form" />
        </div>
      </div>
    </div>
  );
};

export default BreedDetail;