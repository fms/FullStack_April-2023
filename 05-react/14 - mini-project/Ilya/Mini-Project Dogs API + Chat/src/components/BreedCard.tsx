import React from 'react';
import { Breed } from '../types';
import  Card  from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

interface BreedCardProps {
  breed: Breed;
}

const BreedCard: React.FC<BreedCardProps> = ({ breed }) => (
  <Link to={`/breed/${breed.name}`} style={{ width: '18rem', textDecoration: 'none' }}>
    <Card style={{ width: '18rem' }} className="breedCard">
      <Card.Img src={breed.image} className='card-img-top' alt={breed.name} width="200px"/>
      <Card.Title className="breedName">{breed.name}</Card.Title>
      <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
    </Card>
  </Link>
);

export default BreedCard;

