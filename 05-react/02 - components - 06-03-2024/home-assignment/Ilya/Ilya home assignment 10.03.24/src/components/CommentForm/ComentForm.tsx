import React, { useState } from 'react';

const CommentForm = ({ onAdd }) => {
    const [newComment, setNewComment] = useState('');

    const handleAddComment = () => {
        onAdd(newComment);
        setNewComment('');
    };

    return (
        <div>
            <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)} />
            <button onClick={handleAddComment}>Add Comment</button>
        </div>
    );
};

export default CommentForm;