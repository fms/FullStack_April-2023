import React, { useState } from 'react';

const Comment = ({ comment, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(comment);

    const handleEdit = () => {
        setIsEditing(false);
        onEdit(editText);
    };

    return (
        <div>
            {isEditing ? (
                <>
                    <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                    <button onClick={handleEdit}>Save</button>
                </>
            ) : (
                <>
                    <p>{comment}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={onDelete}>Delete</button>
                </>
            )}
        </div>
    );
};

export default Comment;