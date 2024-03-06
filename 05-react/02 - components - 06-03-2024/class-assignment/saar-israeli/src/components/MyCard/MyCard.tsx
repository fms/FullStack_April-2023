import React from 'react'
import './dist/MyCard.css'

function MyCard() {
  return (
    <div className='card-wrapper'>
        <h1 className='card-title'>Picture of a dog</h1>
        <img src="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg" alt="dog image" className='card-image' />
        <p className='card-article'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam eligendi consectetur illum voluptas ad error dolores repellendus hic, aspernatur cum accusantium similique tenetur molestiae nihil sunt ipsam consequatur reprehenderit explicabo?</p>
    </div>
  )
}

export default MyCard