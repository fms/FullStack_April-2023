// ChatForm.tsx
import React, { useState } from "react";
import "./ChatForm.css";

interface ChatFormProps {
  breedName: string;
}

const ChatForm: React.FC<ChatFormProps> = ({ breedName }) => {
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [comments, setComments] = useState<string[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isValid) {
      setComments((prevComments) => [...prevComments, `${name}: ${comment}`]);
      setName("");
      setComment("");
      setAnswer("");
    }
  };

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const answerValue = event.target.value.trim();
    if (answerValue.toLowerCase() === "dog") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setAnswer(answerValue);
  };

  return (
    <form onSubmit={handleSubmit} className="chatForm">
      <div className="chat-header">
        <h2 className="chat-title" style={{ backgroundColor: "#ccc" }}>Chat</h2>
      </div>
      <ul className="chat-comments">
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <label className="chat-label">
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label className="chat-label">
        Comment:
        <textarea value={comment} onChange={(event) => setComment(event.target.value)} />
      </label>
      <br />
      <label className="chat-label">
        Question: Who likes to eat bones? (Tip: dog or cat)
        <input type="text" value={answer} onChange={handleAnswerChange} />
      </label>
      <br />
      <div className="chat-actions">
        {isValid ? (
          <button type="submit" className="submitButton">
            Send
          </button>
        ) : (
          <button type="submit" disabled className="submitButton">
            Send
          </button>
        )}
      </div>
    </form>
  );
};

export default ChatForm;