import React, { useState } from 'react';
import './LikeCounter.scss';

const LikeCounter = () => {
    const [likes, setLikes] = useState(0);

    const incrementLikes = () => {
        setLikes(likes + 1);
    };

    const decrementLikes = () => {
        setLikes(likes - 1);
    };

    return (
        <div className="like-counter">
            <button onClick={incrementLikes}>Like</button>
            <button onClick={decrementLikes}>Dislike</button>
            <span>Likes: {likes < 0 ? 0 : likes}</span>
        </div>
    );
};

export default LikeCounter;