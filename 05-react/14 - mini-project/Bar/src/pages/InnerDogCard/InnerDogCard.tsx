import { ChangeEvent, useState } from "react";
import { useLocation } from "react-router-dom";

function InnerDogCard() {
    const location = useLocation();
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [chatHistory, setChatHistory] = useState([])

    const { breed, image } = location.state;

    function handleSend() {
        if (name && message) {
            const newChat = `${name}: ${message}`
            setChatHistory([...chatHistory, newChat])
        }
    }

    return (
        <div className="container">
            <div className="row d-flex align-items-end">
                <div className="col-md-6 ">
                    <div className="dog">
                        <h1>{breed}</h1>
                        <img src={image} alt={breed} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="chat row border p-5 mt-5">
                        <h2>chat</h2>
                        {chatHistory.map((msg, index) => (
                            <p key={index}>{msg}</p>
                        ))}

                        <div className="inputDiv ">
                            <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" className="form-control mt-3 w-25 p-2 w-75" placeholder="Enter message" />
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control mt-3 w-25 p-2 " placeholder="Enter your name" />
                        </div>
                        <button onClick={handleSend} className="btn btn-primary mt-3" >Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InnerDogCard;
