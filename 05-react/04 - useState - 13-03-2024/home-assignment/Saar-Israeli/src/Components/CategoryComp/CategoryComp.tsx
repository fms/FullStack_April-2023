import Style from './CategoryComp.module.scss';

interface CategoryCompProps {
    category: string,
    brand: string,
    rating: number,
}

function CategoryComp({category, brand, rating} :CategoryCompProps) {
  return (
    <>
    <div className = {Style.categoryWrapper}>
      <div className = {Style.topTextContainer}>
        <h3 className = {Style.topText}>{category}</h3>
        /
        <h3 className = {Style.topText}>{brand}</h3>
      </div>
      <h2 className = {Style.ratingText}>{rating}</h2>
    </div>
    </>
  )
}

export default CategoryComp