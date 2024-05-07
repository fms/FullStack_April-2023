import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from './personalDogPage.module.scss';
import { io } from "socket.io-client";


function PersonalDogPage() {
  const { breed } = useParams();
  const [dogImage, setDogImage] = useState<string>();

  useEffect(() => {
    const socket = io("http://localhost:3000", {
      reconnectionDelayMax: 10000,
    });
    
    socket.emit("connection", () => {
      console.log("Connected to server");

    });
  
    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    socket.emit("join", breed);

    return () => {
      socket.disconnect();
    };
  }, [breed]);

  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`, {})
      .then((res) => res.json())
      .then((data) => setDogImage(data.message));

    return () => {};
  }, [breed]);

  return (
    <div className = {style.dogWebWrapper}>
      <div className = {style.dogDetails}>
        <h1 className = {style.dogTitle}>{breed}</h1>
        <img src={dogImage} alt="" />
      </div>
      <div className = {style.chatWrapper}>
        <form action="" className = {style.formWrapper}>
          <input type="text" placeholder="Type your message here" className = {style.inputText} />
          <input type="submit" className = {style.inputSubmit} value={'Send'}/>
          <h6 className = {style.chatTitle}>Chat</h6>
        </form>
      </div>
    </div>
  );
}

export default PersonalDogPage;
