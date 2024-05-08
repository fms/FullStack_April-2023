import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./personalDogPage.module.scss";
import { io } from "socket.io-client";
// import { ChatHistoryProps } from "../../types/ChatHistoryType";
import DogChat from "../../components/dogChat/DogChat";

const socket = io("http://localhost:3000", {
  reconnectionDelayMax: 10000,
});

function PersonalDogPage() {
  const { breed } = useParams();
  const [dogImage, setDogImage] = useState<string>();


  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`, {})
      .then((res) => res.json())
      .then((data) => setDogImage(data.message));
      
    return () => {};
  }, [breed]);



  return (
    <div className={style.dogWebWrapper}>
      <div className={style.dogDetails}>
        <h1 className={style.dogTitle}>{breed}</h1>
        <img src={dogImage} alt="" />
      </div>

      <DogChat socket={socket}/>
    </div>
  );
}

export default PersonalDogPage;
