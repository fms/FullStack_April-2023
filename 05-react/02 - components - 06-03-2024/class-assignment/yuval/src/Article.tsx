import cody from './assets/cody.png'
import cena from './assets/cena.png'
import paul from './assets/paul.png'

function Article() {
    return (
        <>
            <h1>Latest News</h1>
            <div>
                <h3>Cody Rhodes responds to The Rock</h3>
                <div className='article'>
                    <img src={cody} className='image' />
                    <p>Cody Rhodes warns The Rock not to talk his about dog ever again 👀 <br />
                        The Rock previously referred to Cody’s dog as a “goofy ass dog”</p>
                </div>
                <h3>John Cena update</h3>
                <div className='article'>
                    <img src={cena} className='image' />
                    <p>John Cena says he’s hoping and crossing his fingers to be at Wrestlemania 40 💯</p>
                </div>
                <h3>2024 WWE Hall Of Fame</h3>
                <div className='article'>
                    <img src={paul} className='image' />
                    <p>Paul Heyman will be inducted into the 2024 WWE Hall Of Fame 🐐</p>
                </div>
            </div>
        </>
    )
}

export default Article;