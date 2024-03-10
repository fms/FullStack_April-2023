import myImage from './assets/maxresdefault (1).jpg'


function Article() {
    return (
        <>
            <div className="product-page">
            <div className="product-image">
                <img src={myImage} alt="Product" />
            </div>
            <div className="product-details">
                <h1>Smart Glasses</h1>
                <p>Description of the product goes here...</p>
                <div className="product-options">
                    <div className="option-counter">
                        <span>Likes: 0</span>
                        <button>Like</button>
                    </div>
                    <div className="comment-section">
                        <textarea placeholder="Add a comment..."></textarea>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Article;