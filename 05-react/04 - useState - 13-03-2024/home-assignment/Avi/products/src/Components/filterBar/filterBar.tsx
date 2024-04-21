import React from 'react'
import './filterBar.scss'
import { products } from '../../productsList/products';

function filterBar() {
    const [list, setList] = React.useState(products);

    function highRating() {
        const newList = list.filter((product) => product.rating > 4.5)
        setList(newList)
        console.log(newList);
    }
    return (
        <>
            <div>
                <button className='filterButton' onClick={() => highRating()}>Rating 4.5+</button>
            </div>
        </>
    )
}

export default filterBar