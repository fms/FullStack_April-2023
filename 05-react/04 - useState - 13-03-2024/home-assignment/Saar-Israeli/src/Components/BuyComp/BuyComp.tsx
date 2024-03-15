import Style from './BuyComp.module.scss'

interface BuyCompProps {
  price:number,
  discountPercentage:number,
  stock:number
}

function BuyComp({price, discountPercentage , stock} :BuyCompProps) {

  return (
    <>
      <div className = {Style.buyCompWrapper}>
        <div className = {Style.buyContainer}>
          <h4>{stock} Left</h4>
          <button>Buy</button>
        </div>
        <div className = {Style.buyContainer}>
          <h3>Price: {price}$</h3>
          <h3>Discount: {discountPercentage}%</h3>
        </div>
      </div>
    </>
  )
}

export default BuyComp