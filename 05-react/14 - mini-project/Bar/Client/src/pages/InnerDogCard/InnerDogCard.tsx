import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ChatHistory from "../../types/chatHistoryType";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000", {
    reconnectionDelayMax: 10000,
});

function InnerDogCard() {
    const location = useLocation();
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [chatHistory, setChatHistory] = useState<ChatHistory[]>([])

    const { breed, image } = location.state;

    function handleSend() {
        if (name && message) {
            socket.emit("dogChatMessage", { name, message })
        }
        else {
            alert("Missing name or message")
        }
    }

    useEffect(() => {
        socket.on("dogChatMessage", (arg) => {
            setChatHistory(prevChatHistory => [...prevChatHistory, arg])
        })

        return () => { socket.off("messageFromServer") }
    }, [socket])

    return (
        <div className="container">
            <div className="row d-flex mt-5">
                <div className="col-md-6 ">
                    <div className="dog">
                        <h1>{breed}</h1>
                        <img src={image} alt={breed} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="chat border p-4 mt-5" style={{ height: "400px", overflowY: "auto" }}>
                        <h2 className="mb-3">Dog Chat</h2>
                        <hr />
                        <div className="chat-messages">
                            <div className="chat-content">
                                {chatHistory.map((msg, index) => (
                                    <p key={index}>{`${msg.name}: ${msg.message}`}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="inputSend">
                        <div className="inputDiv mt-4">
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                className="form-control mt-3 w-25 p-2 "
                                placeholder="Enter your name"
                            />
                            <input
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                type="text"
                                className="form-control mt-3 "
                                placeholder="Enter message"
                            />
                        </div>
                        <button onClick={handleSend} className="btn btn-primary mt-3 w-100">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InnerDogCard;
