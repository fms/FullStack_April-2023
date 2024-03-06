// import React from 'react'
import hello_react from '../../assets/hello_react.png'


function Card() {

    return (
        <>
        <div className='mainDiv'>

            <h1>Hello React</h1>
            <img src={hello_react} className="myLogo" alt="hello react image" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
                Nam, ipsa dolorum nesciunt unde, non temporibus tempora aspernatur <br />
                delectus nemo illo amet ullam natus, aperiam cum? Nemo odit ullam ducimus eius.</p>
        </div>
        </>
    )
}

export default Card