import React, { useState } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

const CommentBox = () => {
    const [comments, setComments] = useState([]);

    const addComment = (newComment) => {
        setComments([...comments, newComment]);
    };

    const deleteComment = (index) => {
        const updatedComments = [...comments];
        updatedComments.splice(index, 1);
        setComments(updatedComments);
    };

    const editComment = (index, updatedText) => {
        const updatedComments = [...comments];
        updatedComments[index] = updatedText;
        setComments(updatedComments);
    };

    return (
        <div>
            <h2>Comments</h2>
            {comments.map((comment, index) => (
                <Comment key={index} comment={comment} onDelete={() => deleteComment(index)} onEdit={(text) => editComment(index, text)} />
            ))}
            <CommentForm onAdd={addComment} />
        </div>
    );
};

export default CommentBox;