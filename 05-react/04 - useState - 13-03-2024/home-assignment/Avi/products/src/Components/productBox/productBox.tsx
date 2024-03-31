import React, { ReactNode, useState } from 'react'
import styles from './productBox.module.scss'
import { products } from '../../productsList/products';
import ProductDetailes from '../popup/popup';

function ProductBox() {
  const [list, setList] = React.useState(products);

  function removeProduct(id: number) {
    const newList = list.filter((product) => product.id !== id)
    setList(newList)
  }

  function highRating() {
    const newList = list.filter((product) => product.rating > 4.5)
    setList(newList)
  }

  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.mainDiv__filterBar}>
          <button className={styles.mainDiv__filterButton} onClick={() => highRating()}>Rating 4.5+</button>
        </div>
        {list.map((product) => (
          <div className={styles.mainDiv__productBox} key={product.id}>       
            <div className={styles.mainDiv__productImg}>
              <ProductDetailes {...product} />
            </div>
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <p>Rating: {product.rating}</p>
            <button type='button' onClick={() => removeProduct(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductBox