import style from './dogCard.module.scss';

function DogCard({breed , imageUrl}:AllDogType) {

    return (
      <div className = {style.dogCard}>
        <a href = {`/dog/${breed}`} ><img src={imageUrl} alt={breed}/></a>
        <h1 className = {style.dogDetails}>{breed}</h1>
        <p className = {style.dogDetails}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi vitae enim, corrupti soluta nihil! Facere ipsum dolorum praesentium hic recusandae, debitis repudiandae quasi odio laborum quae esse blanditiis possimus?</p>
      </div>
    );
  }
export default DogCard