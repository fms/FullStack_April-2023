import "./article.scss"
import myImage from "./1208654.png"

function Article() {
    return (
        <>
            <h1>New Article</h1>
            <img src={myImage} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, laborum veniam accusamus quibusdam accusantium eligendi cumque. Repudiandae reiciendis magnam veritatis amet facilis eum, accusantium nulla! Nihil magni error corporis molestias.</p>
        </>
    )
}

export default Article